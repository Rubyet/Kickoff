const db = require('../config/db-connection');

// Create a new player
exports.createPlayer = (req, res) => {
    const { name, image, avatar } = req.body;
    db.query('INSERT INTO players (name, image, avatar) VALUES (?, ?, ?)', [name, image, avatar])
        .then(result => {
            res.status(201).send(`Player created with ID: ${result.insertId}`);
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

// Get a player by ID
exports.getPlayerById = (req, res) => {
    db.query('SELECT * FROM players WHERE id = ?', [req.params.id])
        .then(result => {
            if (result.length === 0) {
                res.status(404).send('Player not found');
            } else {
                res.json(result[0]);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

// Update a player by ID
exports.updatePlayerById = (req, res) => {
    const { name, image, avatar } = req.body;
    db.query('UPDATE players SET name = ?, image = ?, avatar = ? WHERE id = ?', [name, image, avatar, req.params.id])
        .then(result => {
            if (result.affectedRows === 0) {
                res.status(404).send('Player not found');
            } else {
                res.send('Player updated successfully');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

// Delete a player by ID
exports.deletePlayerById = (req, res) => {
    db.query('DELETE FROM players WHERE id = ?', [req.params.id])
        .then(result => {
            if (result.affectedRows === 0) {
                res.status(404).send('Player not found');
            } else {
                res.send('Player deleted successfully');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};

// Get all players
exports.getAllPlayers = (req, res) => {
    db.query('SELECT * FROM players')
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};