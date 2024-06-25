const db = require('../config/db-connection');
const upload = require('../config/file-upload');
const teamController = require('../controllers/teamController');
// Create a new player
exports.createPlayer = (req, res) => {
  const { name } = req.body;
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
    .then(async result => {
      if (result.length === 0) {
        res.status(404).send('Player not found');
      } else {
        try {
          const playerStats = await getPlayerStats(playerIdsStr);
          result[0].playerStats = playerStats;
          console.log(playerStats) ;
        } catch (error) {
          console.error(error); // Handle any errors
        }
        console.log(result[0]);
        return res.json(result[0]);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error:'+ error);
    });
};

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

exports.updatePlayerById = (req, res) => {
  const { name } = req.body;
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
      res.status(500).send('Internal Server Error:'+ error);
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
    .then(async result => {
      try {
        // Create an array to hold all promises for getPlayerStats
        const getPlayerStatsPromises = result.map(async (player, i) => {
          const playerStats = await getPlayerStats(player.id);
          // Add playerStats to the player object
          return { ...player, playerStats };
        });

        // Wait for all getPlayerStats promises to resolve
        const playersWithStats = await Promise.all(getPlayerStatsPromises);

        // Respond with the modified result JSON
        res.json(playersWithStats);
      } catch (error) {
        console.error(error); // Handle any errors
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
};