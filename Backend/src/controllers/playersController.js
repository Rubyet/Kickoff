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
    db.query(`SELECT 
            *, 
            CONCAT(?, image) AS image, 
            CASE 
                WHEN avatar IS NOT NULL AND avatar != '' THEN CONCAT(?, avatar) 
                ELSE '' 
            END AS avatar 
         FROM players`,[global.playersLocation, global.playersLocation])
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
};



// player

function getPlayerStats(playerId, callback) {
    const query = `
      SELECT * FROM matches 
      WHERE (player_home_id = ? OR player_away_id = ?) && is_complete = 1
    `;
  
    db.query(query, [playerId, playerId], (error, results) => {
      if (error) {
        return callback(error);
      }
  
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
  
      callback(null, playerStats);
    });
  }
  
  function calculatePlayerLevel(totalPlayed, totalWin, totalGoalScored) {
    // Example calculation of player level
    let playerLevel = 'Beginner';
  
    if (totalPlayed >= 10 && totalWin / totalPlayed >= 0.5 && totalGoalScored >= 20) {
      playerLevel = 'Intermediate';
    } else if (totalPlayed >= 20 && totalWin / totalPlayed >= 0.6 && totalGoalScored >= 50) {
      playerLevel = 'Advanced';
    }
  
    return playerLevel;
  }
  
  // Example usage:
  const playerId = 123; // Your player id
  getPlayerStats(playerId, (error, playerStats) => {
    if (error) {
      console.error('Error fetching player stats:', error);
    } else {
      console.log('Player stats:', playerStats);
    }
  });