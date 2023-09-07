const express = require('express');
const data = require('./data/dummyData');

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.json({
        message: "welcome"
    });
});

app.get('/current-date', (req, res) => {
    // Create a Date object for the current date and time
    const currentDate = new Date();

    // Get the components of the date and time
    const year = currentDate.getUTCFullYear();
    const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(currentDate.getUTCDate()).padStart(2, '0');
    const hours = String(currentDate.getUTCHours()).padStart(2, '0');
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');

    // Create the formatted date string
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

    // Send the formatted date as the response
    res.json({ date: formattedDate });
});

app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;
    const response = data;
    const currentDate = new Date();

    // Format the date in "YYYY-MM-DDTHH:mm:ssZ" format
    const year = currentDate.getUTCFullYear();
    const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(currentDate.getUTCDate()).padStart(2, '0');
    const hours = String(currentDate.getUTCHours()).padStart(2, '0');
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');

    // Create the formatted date string
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
    if (slack_name !== response.slack_name || track !== response.track) {
        return res.json({
            message: "request does not exist",
            statusCode: 404,
            success: false
        })
    }
    res.json({
        ...response,
        utc_time: formattedDate
    });
})


app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`)
});