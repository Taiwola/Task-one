// Create a Date object for the current date and time
const currentDate = new Date();

// Format the date in "YYYY-MM-DDTHH:mm:ssZ" format
const formattedDate = currentDate.toISOString();

// Get the current day of the week as an integer (0 for Sunday, 1 for Monday, and so on)
const dayOfWeek = currentDate.getDay();

// Define an array of day names
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Use the dayOfWeek integer to get the corresponding day name
const currentDayOfWeek = daysOfWeek[dayOfWeek];


const data = {
    slack_name: "olanitori_seun",
    current_day: currentDayOfWeek,
    utc_time: formattedDate,
    track: "backend",
    github_file_url: "https://github.com/Taiwola/Task-one/blob/main/index.ext",
    github_repo_url: "https://github.com/Taiwola/Task-one",
    status_code: 200
  };

module.exports = data;