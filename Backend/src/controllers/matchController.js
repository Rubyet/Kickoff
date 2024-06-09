const db = require('../config/db-connection');

exports.getAllMatches = (req, res) => {
    (async () => {
        try {
            const matches = await db.query('SELECT * FROM matches');
            res.json(matches);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    })();
};

exports.getMatchById = (req, res) => {
    (async () => {
        try {
            const match = await db.query('SELECT * FROM matches WHERE id = ?', [req.params.id]);
            if (match.length > 0) {
                res.json(match[0]);
            } else {
                res.status(404).send('Match not found');
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    })();
};

exports.createMatch = (req, res) => {
    (async () => {
        try {
            const newMatch = {
                game: req.body.game,
                player_team_combination: req.body.player_team_combination,
                league_is_complete: req.body.league_is_complete,
                league_matches: req.body.league_matches,
                knockout_is_complete: req.body.knockout_is_complete,
                knockout_matches: req.body.knockout_matches,
                final_is_complete: req.body.final_is_complete,
                final_matches: req.body.final_matches,
                friendly_is_complete: req.body.friendly_is_complete,
                friendly_matches: req.body.friendly_matches,
                others_is_complete: req.body.others_is_complete,
                others_type: req.body.others_type,
                others_matches: req.body.others_matches
            };

            const result = await db.query('INSERT INTO matches SET ?', newMatch);
            res.status(201).json({ id: result.insertId, ...newMatch });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    })();
};

exports.updateMatch = (req, res) => {
    (async () => {
        try {
            const updatedMatch = {
                game: req.body.game,
                player_team_combination: req.body.player_team_combination,
                league_is_complete: req.body.league_is_complete,
                league_matches: req.body.league_matches,
                knockout_is_complete: req.body.knockout_is_complete,
                knockout_matches: req.body.knockout_matches,
                final_is_complete: req.body.final_is_complete,
                final_matches: req.body.final_matches,
                friendly_is_complete: req.body.friendly_is_complete,
                friendly_matches: req.body.friendly_matches,
                others_is_complete: req.body.others_is_complete,
                others_type: req.body.others_type,
                others_matches: req.body.others_matches
            };

            const result = await db.query('UPDATE matches SET ? WHERE id = ?', [updatedMatch, req.params.id]);
            if (result.affectedRows > 0) {
                res.json({ id: req.params.id, ...updatedMatch });
            } else {
                res.status(404).send('Match not found');
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    })();
};

exports.deleteMatch = (req, res) => {
    (async () => {
        try {
            const result = await db.query('DELETE FROM matches WHERE id = ?', [req.params.id]);
            if (result.affectedRows > 0) {
                res.send('Match deleted');
            } else {
                res.status(404).send('Match not found');
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    })();
};

exports.createSimpleMatch = (req, res) => {
    (async () => {
        try {
            const newMatch = {
                game: req.body.gameId,
                player_team_combination: JSON.stringify(req.body.player_team_combination)
            };

            const result = await db.query('INSERT INTO matches SET ?', newMatch);
            res.status(201).json({ id: result.insertId, ...newMatch });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    })();
};


// Function to generate match combinations
function generateMatchCombinations(playerTeamCombination) {
    const matches = [];
    const totalTeams = playerTeamCombination.reduce((acc, player) => acc + player.teams.length, 0);
    const teamPool = [];

    // Flatten the playerTeamCombination array to easily access all teams
    playerTeamCombination.forEach(player => {
        player.teams.forEach(team => {
            teamPool.push({ ...team, playerId: player.playerId });
        });
    });

    // Ensure each team plays against teams from different players
    for (let i = 0; i < totalTeams; i++) {
        for (let j = i + 1; j < totalTeams; j++) {
            if (teamPool[i].playerId !== teamPool[j].playerId) {
                matches.push({
                    match_details: [
                        {
                            id: teamPool[i].id,
                            goalScored: 1,
                            name: teamPool[i].name,
                            league: teamPool[i].league,
                            logo: teamPool[i].logo,
                            ova: teamPool[i].ova,
                            att: teamPool[i].att,
                            mid: teamPool[i].mid,
                            def: teamPool[i].def
                        },
                        {
                            id: teamPool[j].id,
                            goalScored: 1,
                            name: teamPool[j].name,
                            league: teamPool[j].league,
                            logo: teamPool[j].logo,
                            ova: teamPool[j].ova,
                            att: teamPool[j].att,
                            mid: teamPool[j].mid,
                            def: teamPool[j].def
                        }
                    ],
                    is_complete: 0
                });
            }
        }
    }

    return matches;
}

exports.getLeagueMatches = (req, res) => {
    (async () => {
        try {
            const matchId = req.params.id;
            const match = await db.query('SELECT * FROM matches WHERE id = ?', [matchId]);

            if (match.length === 0) {
                return res.status(404).json({ error: 'Match not found' });
            }

            const playerTeamCombination = JSON.parse(match[0].player_team_combination);
            const matchCombinations = generateMatchCombinations(playerTeamCombination);

            res.json(matchCombinations);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    })();
    
};