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