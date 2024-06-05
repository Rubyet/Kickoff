const db = require('../config/db-connection');

// Create a new game
exports.createGame = (req, res) => {
    console.log(req);
    const { no_of_players, no_of_teams_per_players, players, teams } = req.body;
    db.query('INSERT INTO games (no_of_players, no_of_teams_per_players, players, teams) VALUES (?, ?, ?, ?)', [no_of_players, no_of_teams_per_players, players, teams])
        .then(result => {
            res.status(201).send(`Game created with ID: ${result.insertId}`);
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

// Get a game by ID
exports.getGameById = (req, res) => {
    db.query('SELECT * FROM games WHERE id = ?', [req.params.id])
        .then(result => {
            if (result.length === 0) {
                res.status(404).send('Game not found');
            } else {
                res.json(result[0]);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

// Update a game by ID
exports.updateGameById = (req, res) => {
    const { no_of_players, no_of_teams_per_players, players, teams } = req.body;
    db.query('UPDATE games SET no_of_players = ?, no_of_teams_per_players = ?, players = ?, teams = ? WHERE id = ?', [no_of_players, no_of_teams_per_players, players, teams, req.params.id])
        .then(result => {
            if (result.affectedRows === 0) {
                res.status(404).send('Game not found');
            } else {
                res.send('Game updated successfully');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

// Delete a game by ID
exports.deleteGameById = (req, res) => {
    db.query('DELETE FROM games WHERE id = ?', [req.params.id])
        .then(result => {
            if (result.affectedRows === 0) {
                res.status(404).send('Game not found');
            } else {
                res.send('Game deleted successfully');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

// Get all games
exports.getAllGames = (req, res) => {
    db.query('SELECT * FROM games')
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};
