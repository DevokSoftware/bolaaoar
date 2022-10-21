const express = require("express");
const NBA = require("nba");
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
});

app.get("/stats", async (req, res) => {
    console.log('Requesting stats...')
    let stats = await NBA.stats.teamStats({ Season: '2022-23' });
    console.log('Sending stats...')
    res.send(stats)
});
