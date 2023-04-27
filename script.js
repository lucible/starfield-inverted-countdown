

// Function to update the timer value
function updateTimer() {
    // Get the current date and time
    var now = new Date();

    // Define the target date and time
    var targetDate = new Date("May 12, 2023 12:00:00");

    // Calculate the time difference in milliseconds
    var timeDifference = targetDate - now - 12 * 60 * 60 * 1000;

    if (timeDifference < 0) {
        timeDifference = 0;
    }

    // Calculate the time update value (100% divided by time difference in seconds)
    var timeLeftValue = ((timeDifference) / (1000 * 60 * 60 * 24)).toFixed(2);
    
    var invertedPercentValue = (100 * (1000 * 60 * 60 * 24) / (timeDifference)).toFixed(4);
    var invertedPercentLastTwo = invertedPercentValue.slice(-2);
    invertedPercentValue = Math.floor(invertedPercentValue * 100) / 100;

    // Display the time update value on the webpage
    document.getElementById("timeLeft").innerHTML = timeLeftValue + " days left";
    document.getElementById("invertedPercent").innerHTML = invertedPercentValue + "%";
}

// Call the updateTimer() function initially to set the initial value
updateTimer();

// Call the updateTimer() function every second (1000 milliseconds)
setInterval(updateTimer, 30);
