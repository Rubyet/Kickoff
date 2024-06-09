const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const kickoff = require('./src/routes/kickoffApiRoutes');
const port = 3000;

const hostname = process.env.BASE_URL;

// Set the public/image location
const publicImageLocation = '/public/images';
global.hostname = hostname;
global.publicImageLocation = publicImageLocation;
global.logoLocation = hostname + publicImageLocation + '/logos/'
global.playersLocation = hostname + publicImageLocation + '/players/'

app.use(cors());
app.use(express.json());
// Serve static files from the "public" directory
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Backend working just perfect!!! Enjoy!!");
});



app.use('/api', kickoff);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
