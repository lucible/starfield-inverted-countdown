// Function to update the timer value
function updateTimer() {
    // Get the current date and time
    var now = new Date();

    // Define the target date and time
    var targetDate = new Date("May 12, 2023 12:00:00");

    // Calculate the time difference in milliseconds
    var timeDifference = targetDate - now - (12 * 60 * 60 + 60 * 60 * 24 * 0) * 1000;
    timeDifference = (timeDifference / (1000 * 60 * 60 * 24));

    if (timeDifference < 0) {
        timeDifference = 0;
    }

    // Calculate the time update value (100% divided by time difference in seconds)
    
    var invertedPercentValue = (100 / timeDifference).toFixed(4);
    var invertedPercentLastTwo = invertedPercentValue.slice(-2);
    invertedPercentValue = invertedPercentValue.slice(0, -2);

    // Display the time update value on the webpage

    var timeRemainingString;

    if (timeDifference > 3) {
        var timeLeftValue = timeDifference.toFixed(2);
        timeRemainingString = "Countdown: " + timeLeftValue + " days left";
    }
    else {
        var timeLeftValue = (timeDifference * 24).toFixed(2);
        timeRemainingString = timeLeftValue + " Hours Remain";
    }

    document.getElementById("timeLeft").innerHTML = timeRemainingString;
    document.getElementById("invertedPercent").innerHTML = invertedPercentValue;
    document.getElementById("invertedPercentLastTwo").innerHTML = invertedPercentLastTwo + "%";
}

// Call the updateTimer() function initially to set the initial value
updateTimer();

// Call the updateTimer() function every second (1000 milliseconds)
setInterval(updateTimer, 30);
