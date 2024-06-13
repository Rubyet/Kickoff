const db = require('../config/db-connection');
const upload = require('../config/file-upload');
// Create a new player
exports.createPlayer = (req, res) => {
  const {name} = req.body;
  const images = req.files.map(file => file.filename); // Get uploaded file names
  const image = images[0]; // Assuming the first file is 'image'
  const avatar = images[1]; // Assuming the second file is 'avatar'
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
  const playerIdsStr = req.params.id;
  db.query(
    `SELECT 
            *, 
            CONCAT(?, image) AS image, 
            CASE 
                WHEN avatar IS NOT NULL AND avatar != '' THEN CONCAT(?, avatar) 
                ELSE '' 
            END AS avatar 
         FROM players 
         WHERE id = (${playerIdsStr})`,
    [global.playersLocation, global.playersLocation]
  )
    .then(result => {
      if (result.length === 0) {
        res.status(404).send('Player not found');
      } else {
        return res.json(result[0]);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
};

exports.updatePlayerById = (req, res) => {
  const {name} = req.body;
  const images = req.files.map(file => file.filename); // Get uploaded file names
  const image = images[0]; // Assuming the first file is 'image'
  const avatar = images[1]; // Assuming the second file is 'avatar'
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
  db.query(`SELECT 
            *, 
            CONCAT(?, image) AS image, 
            CASE 
                WHEN avatar IS NOT NULL AND avatar != '' THEN CONCAT(?, avatar) 
                ELSE '' 
            END AS avatar 
        FROM players`, [global.playersLocation, global.playersLocation])
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
};