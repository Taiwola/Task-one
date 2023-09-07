const express = require('express');
const data = require('./data/dummyData');

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.json({
        message: "welcome"
    });
});

app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;
    const response = data;
    if (slack_name !== response.slack_name || track !== response.track) {
        return res.json({
            message: "request does not exist",
            statusCode: 404,
            success: false
        })
    }
    res.json(response);
})


app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`)
});