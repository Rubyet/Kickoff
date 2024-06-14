const db = require('../config/db-connection');
const axios = require('axios');

exports.getAllFixtures = (req, res) => {
    (async () => {
        try {
            const fixtures = await db.query('SELECT * FROM fixtures');
            res.json(fixtures);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    })();
};

exports.getMatchById = (req, res) => {
    (async () => {
        try {
            const match = await db.query('SELECT * FROM fixtures WHERE id = ?', [req.params.id]);
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

            const result = await db.query('INSERT INTO fixtures SET ?', newMatch);
            res.status(201).json({ id: result.insertId, ...newMatch });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error' + error);
        }
    })();
};

exports.updateFinishedfixture = (req, res) => {
    (async () => {
        try {
            result = null;
            const { fixture_is_complete, finished_matches } = req.body;
            if (req.body.fixture_type == "league") {
                result = await db.query('UPDATE fixtures SET league_is_complete = ? , league_matches = ? WHERE id = ?', [fixture_is_complete, finished_matches, req.params.id]);
            } else if (req.body.fixture_type == "knockout") {
                result = await db.query('UPDATE fixtures SET knockout_is_complete = ? , knockout_matches = ? WHERE id = ?', [fixture_is_complete, finished_matches, req.params.id]);
            } else if (req.body.fixture_type == "final") {
                result = await db.query('UPDATE fixtures SET final_is_complete = ? , final_matches = ? WHERE id = ?', [fixture_is_complete, finished_matches, req.params.id]);
            } else if (req.body.fixture_type == "friendly") {
                result = await db.query('UPDATE fixtures SET friendly_is_complete = ? , friendly_matches = ? WHERE id = ?', [fixture_is_complete, finished_matches, req.params.id]);
            } else if (req.body.fixture_type == "others") {
                result = await db.query('UPDATE fixtures SET others_is_complete = ? , others_matches = ? WHERE id = ?', [fixture_is_complete, finished_matches, req.params.id]);
            }

            if (result.affectedRows > 0) {
                res.json({ updatedId: req.params.id});
            } else {
                res.status(404).send('Match not found');
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error' + error);
        }
    })();
};

exports.deleteMatch = (req, res) => {
    (async () => {
        try {
            const result = await db.query('DELETE FROM fixtures WHERE id = ?', [req.params.id]);
            if (result.affectedRows > 0) {
                res.send('Match deleted');
            } else {
                res.status(404).send('Match not found');
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error' + error);
        }
    })();
};

exports.createSimpleMatch = (req, res) => {
    playerTeamCombination = [];
    (async () => {
        try {
            full_combination = req.body.player_team_combination;

            for (let i = 0; i < full_combination.length; i++) {
                playerTeam = {};
                playerTeam.playerId = full_combination[i].playerId;
                playerTeam.teams = [];
                for (let j = 0; j < full_combination[i].teams.length; j++) {
                    playerTeam.teams.push(full_combination[i].teams[j].id);
                }
                playerTeamCombination.push(playerTeam);
            }
            const newMatch = {
                game: req.body.gameId,
                player_team_combination: JSON.stringify(playerTeamCombination)
            };

            const result = await db.query('INSERT INTO fixtures SET ?', newMatch);
            res.status(201).json({ fixture_id: result.insertId, ...newMatch });
        } catch (error) {

            console.error('Error:', error);
            res.status(500).send('Internal Server Error' + error);
        }
    })();
};


async function generateLeagueMatchCombinations(playerTeamCombination, fixtureId, matchType, fixtureType) {
    // Check if matches for the given fixtureId already exist
    const existingMatches = await db.query('SELECT * FROM matches WHERE fixture_id = ? ORDER BY is_complete ASC', [fixtureId]);

    if (existingMatches.length > 0) {
        // Format existing matches
        let existingMatchCombinations = existingMatches.map(match => ({
            match_id: match.id,
            player_home_id: match.player_home_id,
            player_away_id: match.player_away_id,
            team_home_goal: match.team_home_goal || 0,
            team_home_id: match.team_home,
            team_away_id: match.team_away,
            team_away_goal: match.team_away_goal || 0,
            is_complete: match.is_complete
        }));
        return existingMatchCombinations;
    }
    let matchCombinations = [];
    let thisfixtureId = fixtureId;
    for (let i = 0; i < playerTeamCombination.length; i++) {
        const homePlayer = playerTeamCombination[i];
        
        for (let j = 0; j < homePlayer.teams.length; j++) {
            const homeTeam = homePlayer.teams[j];
            
            for (let k = i + 1; k < playerTeamCombination.length; k++) { // Start from i + 1 to ensure unique combinations
                const awayPlayer = playerTeamCombination[k];
                console.log(awayPlayer.teams.length);
                console.log(matchType );
                for (let l = 0; l < awayPlayer.teams.length; l++) {
                    console.log(matchType );
                    const awayTeam = awayPlayer.teams[l];
                    console.log("here1"+thisfixtureId);
                    // Insert the match into the database with the provided matchType and fixtureType
                    const result = await db.query(
                        `INSERT INTO matches 
                        (fixture_id, match_type, fixture_type, player_home_id, team_home, player_away_id, team_away) 
                        VALUES (?, ?, ?, ?, ?, ?, ?)`,
                        [thisfixtureId, matchType, fixtureType, homePlayer.playerId, homeTeam, awayPlayer.playerId, awayTeam]
                    );

                    // Get the inserted match ID
                    const fixtureId = result.insertId;

                    // Add the match combination to the array
                    matchCombinations.push({
                        match_id: fixtureId,
                        player_home_id: homePlayer.playerId,
                        player_away_id: awayPlayer.playerId,
                        team_home_goal: 0,
                        team_home_id: homeTeam,
                        team_away_id: awayTeam,
                        team_away_goal: 0,
                        is_complete: false
                    });
                }
            }
        }
    }

    return matchCombinations;
}

exports.getLeagueFixtures = (req, res) => {
    (async () => {
        try {
            const fixtureId = req.params.id;
            const match = await db.query('SELECT * FROM fixtures WHERE id = ?', [fixtureId]);

            if (match.length === 0) {
                return res.status(404).json({ error: 'Match not found' });
            }

            if (match[0].league_is_complete != null && match[0].league_is_complete == 1) {
                res.json(JSON.parse(match[0].league_matches));
            }

            const gameId = match[0].game;
            const game = await db.query('SELECT match_type, fixture_type FROM games WHERE id = ?', [gameId]);

            if (game.length === 0) {
                return res.status(404).json({ error: 'Game not found' });
            }

            const { match_type, fixture_type } = game[0];
            const playerTeamCombination = JSON.parse(match[0].player_team_combination);
            
            const matchCombinations = await generateLeagueMatchCombinations(playerTeamCombination, fixtureId, match_type, fixture_type);

            if (matchCombinations.message) {
                const matchesWithDetails = await enrichMatchDetails(matchCombinations.matchCombinations, res);
                return res.status(200).json({ message: matchCombinations.message, matches: matchesWithDetails });
            }

            const matchesWithDetails = await enrichMatchDetails(matchCombinations, res);

            res.json(matchesWithDetails);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' + error });
        }
    })();
};

const fetchPlayerById = async (playerId) => {
    try {
        const response = await axios.get(`${hostname}/api/players/${playerId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching player with ID ${playerId}:`, error);
        throw new Error('Error fetching player data');
    }
};

const fetchTeamById = async (teamId) => {
    try {
        const response = await axios.get(`${hostname}/api/teams/${teamId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching team with ID ${teamId}:`, error);
        throw new Error('Error fetching team data');
    }
};

async function enrichMatchDetails(matches, res) {
    return await Promise.all(matches.map(async match => {
        try {
            const playerHome = await fetchPlayerById(match.player_home_id);
            const playerAway = await fetchPlayerById(match.player_away_id);
            const teamHome = await fetchTeamById(match.team_home_id);
            const teamAway = await fetchTeamById(match.team_away_id);
            // const teamAway = teamsController.getTeamById({"params":{"id":1}},resadasd);


            return {
                match_id: match.match_id,
                player_home: playerHome || {},
                player_away: playerAway || {},
                team_home_goal: match.team_home_goal,
                team_home: teamHome || {},
                team_away_goal: match.team_away_goal,
                team_away: teamAway || {},
                is_complete: match.is_complete
            };
        } catch (error) {
            console.error('Error fetching details for match:', match, error);
            return {
                match_id: match.match_id,
                player_home: {},
                player_away: {},
                team_home_goal: match.team_home_goal,
                team_home: {},
                team_away_goal: match.team_away_goal,
                team_away: {},
                is_complete: match.is_complete
            };
        }
    }));
}

//write a function to generate all the matches from player_team_combination as knocout matches based on match_type and also store them in the database
exports.generateKnockoutMatches = (req, res) => {
    (async () => {
        try {
            const fixtureId = req.params.id;
            const match = await db.query('SELECT * FROM fixtures WHERE id = ?', [fixtureId]);

            if (match.length === 0) {
                return res.status(404).json({ error: 'Match not found' });
            }

            if (match[0].knockout_is_complete != null && match[0].knockout_is_complete == 1) {
                res.json(JSON.parse(match[0].knockout_matches));
            }

            const gameId = match[0].game;
            const game = await db.query('SELECT match_type, fixture_type FROM games WHERE id = ?', [gameId]);

            if (game.length === 0) {
                return res.status(404).json({ error: 'Game not found' });
            }

            const { match_type, fixture_type } = game[0];
            const playerTeamCombination = JSON.parse(match[0].player_team_combination);

            const matchCombinations = await generateKnockoutMatchCombinations(playerTeamCombination, fixtureId, match_type, fixture_type);

            if (matchCombinations.message) {
                const matchesWithDetails = await enrichMatchDetails(matchCombinations.matchCombinations, res);
                return res.status(200).json({ message: matchCombinations.message, matches: matchesWithDetails });
            }

            const matchesWithDetails = await enrichMatchDetails(matchCombinations, res);

            res.json(matchesWithDetails);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' + error });
        }
    })();
};