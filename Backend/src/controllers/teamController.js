const db = require('../config/db-connection');

exports.getRandomTeams = async (req, res) => {
    try {
        const game = await db.query('SELECT * FROM games where id = ?', req.params.id);

        const playerIdsString = game[0].players;
        const playerIds = JSON.parse(playerIdsString);
        const playerIdsStr = playerIds.join(',');

        const players = await db.query(
            `SELECT 
                *, 
                CONCAT(?, image) AS image, 
                CASE 
                    WHEN avatar IS NOT NULL AND avatar != '' THEN CONCAT(?, avatar) 
                    ELSE '' 
                END AS avatar 
            FROM players 
            WHERE id IN (${playerIdsStr})`,
            [global.playersLocation, global.playersLocation]
        );

        const NoOfPlayers = game[0].no_of_players;
        const TeamsPerPlayer = game[0].no_of_teams_per_players;

        const TeamIndexes = JSON.parse(game[0].teams);
        const teamIdsStr = TeamIndexes.join(',');
        const Teams = await db.query(`SELECT *, CONCAT(?, logo) AS logo FROM fifa_teams WHERE id IN (${teamIdsStr})`, [global.logoLocation]);

        const response = await assignTeamsToPlayers(NoOfPlayers, TeamsPerPlayer, TeamIndexes, players, Teams);

        res.json(response);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function assignTeamsToPlayers(NoOfPlayers, TeamsPerPlayer, TeamIndexes, players, Teams) {
    const response = [];
    if (NoOfPlayers * TeamsPerPlayer > TeamIndexes.length) {
        throw new Error("Not enough teams for each player to have the specified number of teams.");
    }
    shuffle(TeamIndexes);

    for (let i = 0; i < NoOfPlayers; i++) {
        const player = {};
        player.playerId = players[i]?.id;
        player.playerName = players[i].name;
        player.playerImage = players[i].image;
        player.playerAvatar = players[i].avatar;

        try {
            const playerStats = await getPlayerStats(player.playerId);
            player.playerStats = playerStats;
        } catch (error) {
            console.error(error); // Handle any errors
        }
        player.teams = [];
        for (let j = 0; j < TeamsPerPlayer; j++) {
            // Retrieve the team information based on randomTeams[j]
            const teamIndex = TeamIndexes[i * TeamsPerPlayer + j];

            const team = Teams.find(t => t.id === teamIndex);
            if (team) {
                player.teams.push(team);
            } else {
                console.error(`Team with id ${teamIndex} not found`);
            }
        }

        response.push(player);
    }
    return response;
}


// player stats

function getPlayerStats(playerId) {
    console.log("Player ID", playerId);
    return new Promise((resolve, reject) => {
        const query = `
            SELECT * FROM matches 
            WHERE (player_home_id = ? OR player_away_id = ?) AND is_complete = 1
        `;
        db.query(query, [playerId, playerId])
            .then(results => {
                let totalPlayed = 0;
                let totalWin = 0;
                let totalLose = 0;
                let totalDraw = 0;
                let totalGoalScored = 0;
                let totalGoalAgainst = 0;

                results.forEach(match => {
                    totalPlayed++;

                    if (match.team_home_goal > match.team_away_goal) {
                        if (match.player_home_id === playerId) {
                            totalWin++;
                        } else {
                            totalLose++;
                        }
                    } else if (match.team_home_goal < match.team_away_goal) {
                        if (match.player_home_id === playerId) {
                            totalLose++;
                        } else {
                            totalWin++;
                        }
                    } else {
                        totalDraw++;
                    }

                    if (match.player_home_id === playerId) {
                        totalGoalScored += match.team_home_goal;
                        totalGoalAgainst += match.team_away_goal;
                    } else {
                        totalGoalScored += match.team_away_goal;
                        totalGoalAgainst += match.team_home_goal;
                    }
                });

                const playerLevel = calculatePlayerLevel(totalPlayed, totalWin, totalGoalScored);

                const playerStats = {
                    totalPlayed,
                    totalWin,
                    totalLose,
                    totalDraw,
                    totalGoalScored,
                    totalGoalAgainst,
                    playerLevel
                };

                resolve(playerStats);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function calculatePlayerLevel(totalPlayed, totalWin, totalGoalScored) {
    // Example calculation of player level
    let playerLevel = 'Novice';
  
    if (totalPlayed >= 10 && totalWin / totalPlayed >= 0.5 && totalGoalScored >= 20) {
        playerLevel = 'Skilled';
    } else if (totalPlayed >= 20 && totalWin / totalPlayed >= 0.6 && totalGoalScored >= 50) {
        playerLevel = 'Expert';
    }
  
    return playerLevel;
  }

// CRUD Operations for fifa_teams

// Create a new team
exports.createTeam = (req, res) => {
    const { name, logo } = req.body;
    db.query('INSERT INTO fifa_teams (name, logo) VALUES (?, ?)', [name, logo])
        .then(result => {
            res.status(201).send(`Team created with ID: ${result.insertId}`);
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

// Get a team by ID
exports.getTeamById = (req, res) => {
    db.query('SELECT *, CONCAT(?, logo) AS logo FROM fifa_teams WHERE id = ?', [global.logoLocation, req.params.id])
        .then(result => {
            if (result.length === 0) {
                res.status(404).send('Team not found');
            } else {
                res.json(result[0]);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

// Update a team by ID
exports.updateTeamById = (req, res) => {
    const { name, logo } = req.body;
    db.query('UPDATE fifa_teams SET name = ?, logo = ? WHERE id = ?', [name, logo, req.params.id])
        .then(result => {
            if (result.affectedRows === 0) {
                res.status(404).send('Team not found');
            } else {
                res.send('Team updated successfully');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

// Delete a team by ID
exports.deleteTeamById = (req, res) => {
    db.query('DELETE FROM fifa_teams WHERE id = ?', [req.params.id])
        .then(result => {
            if (result.affectedRows === 0) {
                res.status(404).send('Team not found');
            } else {
                res.send('Team deleted successfully');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

// Get all teams
exports.getAllTeams = (req, res) => {
    db.query('SELECT * , CONCAT(?, logo) AS logo FROM fifa_teams', [global.logoLocation])
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};
