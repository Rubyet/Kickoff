const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
const kickoff = require('./src/routes/kickoffApiRoutes');
const port = 3000;

// Get the hostname
const hostname = process.env.BASE_URL;

// Set the public/image location
const publicImageLocation = '/public/images';

// Store them in global variables
global.hostname = hostname;
global.publicImageLocation = publicImageLocation;
global.logoLocation = hostname + publicImageLocation + '/logos/'
global.playersLocation = hostname + publicImageLocation + '/players/'

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send("Backend working just perfect!!! Enjoy!!");
});



app.use('/api', kickoff);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
