const express = require('express');
const cors = require('cors');
const app = express();
const kickoff = require('./src/routes/kickoffApiRoutes');
const port = 3000;

const os = require('os');

// Get the hostname
const hostname = os.hostname();

// Set the public/image location
const publicImageLocation = '/public/image';

// Store them in global variables
global.hostname = hostname;
global.publicImageLocation = publicImageLocation;
global.logoLocation = hostname + publicImageLocation + '/logos/'
global.playersLocation = hostname + publicImageLocation + '/players/'

app.use(cors());

app.get('/', (req,res) => {
    res.send("Backend working just perfect!!! Enjoy!!");
});



app.use('/api', kickoff);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
