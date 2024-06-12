const db = require('../config/db-connection');

// Update a match by ID
exports.updateMatchById = (req, res) => {
    const { team_home_goal, team_away_goal, is_complete } = req.body;
    db.query('UPDATE matches SET team_home_goal = ?, team_away_goal = ?, is_complete = ? WHERE id = ?', [team_home_goal, team_away_goal, is_complete, req.params.id])
        .then(result => {
            if (result.affectedRows === 0) {
                res.status(404).send('Match not found');
            } else {
                res.send('Match updated successfully');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

//function to calculate the points table from the matches table to total wins, losses, draws, goals for, goals against, and points of each team
exports.calculatePointsTable = (req, res) => {
    let allTeams;
    let allPlayers;
    db.query('SELECT * , CONCAT(?, logo) AS logo FROM fifa_teams', [global.logoLocation])
        .then(result => {
            allTeams = result;
        })
        .catch(error => {
            console.error('Error:', error);
            return 'Internal Server Error';
        });
    db.query(`SELECT 
            *, 
            CONCAT(?, image) AS image, 
            CASE 
                WHEN avatar IS NOT NULL AND avatar != '' THEN CONCAT(?, avatar) 
                ELSE '' 
            END AS avatar 
        FROM players`, [global.playersLocation, global.playersLocation])
        .then(result => {
            allPlayers = result;
        })
        .catch(error => {
            console.error('Error:', error);
            return 'Internal Server Error';
        });
    db.query('SELECT * FROM matches WHERE fixture_id = ? AND match_type IN (1, 2, 3) AND is_complete = 1', [req.params.fixture_id])
        .then(result => {
            let teamIds = [];
            let playerIds = [];
            result.forEach(match => {
                if (!teamIds.includes(match.team_home)) {
                    teamIds.push(match.team_home);
                }
                if (!teamIds.includes(match.team_away)) {
                    teamIds.push(match.team_away);
                }
                if (!playerIds.includes(match.player_home_id)) {
                    playerIds.push(match.player_home_id);
                }
                if (!playerIds.includes(match.player_away_id)) {
                    playerIds.push(match.player_away_id);
                }
            });
            let teamPointsTable = [];
            let playerPointsTable = [];

            teamIds.forEach(teamId => {
                let teamMatches = result.filter(match => match.team_home === teamId || match.team_away === teamId);

                let teamPoints = {
                    team: allTeams.filter(team => team.id === teamId),
                    played: 0,
                    wins: 0,
                    losses: 0,
                    draws: 0,
                    goals_scored: 0,
                    goals_against: 0,
                    points: 0
                };
                teamMatches.forEach(match => {
                    teamPoints.played++;
                    if (match.team_home === teamId) {
                        teamPoints.goals_scored += match.team_home_goal;
                        teamPoints.goals_against += match.team_away_goal;
                        if (match.team_home_goal > match.team_away_goal) {
                            teamPoints.wins++;
                            teamPoints.points += 3;
                        } else if (match.team_home_goal < match.team_away_goal) {
                            teamPoints.losses++;
                        } else {
                            teamPoints.draws++;
                            teamPoints.points++;
                        }
                    } else {
                        teamPoints.goals_scored += match.team_away_goal;
                        teamPoints.goals_against += match.team_home_goal;
                        if (match.team_away_goal > match.team_home_goal) {
                            teamPoints.wins++;
                            teamPoints.points += 3;
                        } else if (match.team_away_goal < match.team_home_goal) {
                            teamPoints.losses++;
                        } else {
                            teamPoints.draws++;
                            teamPoints.points++;
                        }
                    }
                });

                teamPointsTable.push(teamPoints);
            });
            playerIds.forEach(playerId => {
                let playerMatches = result.filter(match => match.player_home_id === playerId || match.player_away_id === playerId);

                let playerPoints = {
                    player: allPlayers.filter(player => player.id === playerId),
                    played: 0,
                    wins: 0,
                    losses: 0,
                    draws: 0,
                    goals_scored: 0,
                    goals_against: 0,
                    points: 0
                };
                playerMatches.forEach(match => {
                    playerPoints.played++;
                    if (match.player_home_id === playerId) {
                        playerPoints.goals_scored += match.team_home_goal;
                        playerPoints.goals_against += match.team_away_goal;
                        if (match.team_home_goal > match.team_away_goal) {
                            playerPoints.wins++;
                            playerPoints.points += 3;
                        } else if (match.team_home_goal < match.team_away_goal) {
                            playerPoints.losses++;
                        } else {
                            playerPoints.draws++;
                            playerPoints.points++;
                        }
                    } else {
                        playerPoints.goals_scored += match.team_away_goal;
                        playerPoints.goals_against += match.team_home_goal;
                        if (match.team_away_goal > match.team_home_goal) {
                            playerPoints.wins++;
                            playerPoints.points += 3;
                        } else if (match.team_away_goal < match.team_home_goal) {
                            playerPoints.losses++;
                        } else {
                            playerPoints.draws++;
                            playerPoints.points++;
                        }
                    }
                });

                playerPointsTable.push(playerPoints);
            });

            res.json({ team_points: teamPointsTable, player_points: playerPointsTable });
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};