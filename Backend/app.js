const express = require('express');
const cors = require('cors');
const app = express();
const kickoff = require('./src/routes/kickoffApiRoutes');
const port = 3000;

app.use(cors());

app.get('/', (req,res) => {
    res.send("Backend working just perfect!!! Enjoy!!");
});

app.use('/api', kickoff);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
