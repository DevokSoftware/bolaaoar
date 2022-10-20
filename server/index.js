const express = require("express");
const NBA = require("nba");
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.listen(PORT, () => {
});

app.get("/stats", async (req, res) => {
    let stats =
        await NBA.stats.teamStats({ Season: '2022-23' });
    res.send(stats)
});
