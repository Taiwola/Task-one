// Create a Date object for the current date and time
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