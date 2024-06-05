const db = require('../config/db-connection');
var response = [];
var TeamIndexes = [];
exports.getAllMatches = (req, res) => {
    res.send('Hello, World! Done yo');
    x = 3;
    y = 2;

    let players = [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8]
    ];
    let players2 = [
        [1],
        [3],
        [5],
        [7]
    ];

    let matches = generateCombinations(players);

    function generateCombinations(pairs) {
        let combinations = [];

        for (let i = 0; i < pairs.length; i++) {
            for (let j = i + 1; j < pairs.length; j++) {
                for (let x of pairs[i]) {
                    for (let y of pairs[j]) {
                        combinations.push([x, y]);
                    }
                }
            }
        }

        return combinations;
    }

    function getUniqueTeams(pairs) {
        let uniqueNumbers = new Set();

        for (let pair of pairs) {
            uniqueNumbers.add(pair[0]);
            uniqueNumbers.add(pair[1]);
        }

        return Array.from(uniqueNumbers);
    }
    console.log(matches);

    let teams = getUniqueTeams(matches);

    console.log(teams);
};