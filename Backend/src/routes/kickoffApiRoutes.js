const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teamController');
const matchController = require('../controllers/matchController');

router.get('/', (req,res) => {
    res.send("Api is also working!!! Double Enjoy!!");
});
router.get('/random/:id', teamsController.getRandomTeams);
router.get('/match', matchController.getAllMatches);

module.exports = router;