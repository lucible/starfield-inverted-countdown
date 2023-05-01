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
    var invertedPercentLastTwo = "";

    if (timeDifference > 0){
        invertedPercentLastTwo = invertedPercentValue.slice(-2);
        invertedPercentRemaining = invertedPercentValue.slice(0, -2);
    }

    // Display the time update value on the webpage

    var timeRemainingString;
    var invertedTimeString = "Inverted Time: " + invertedPercentRemaining;
    var descString = "Out of the days left right now, <br>what percent of that will be covered <br>with one more day of waiting.";

    if (timeDifference > 3) {
        var days = timeDifference.toFixed(2);
        timeRemainingString = "Countdown: " + days + " days left";
    }
    else if (timeDifference > 0.5) {
        var hours = (timeDifference * 24).toFixed(2);
        timeRemainingString = hours + " Hours Remain";
    }
    else {
        var hours = Math.floor(timeDifference * 24);
        var minutes = Math.floor((timeDifference * 24 - hours) * 60);
        var seconds = Math.floor(((timeDifference * 24 - hours) * 60 - minutes) * 60);

        timeRemainingString = "Time Remaining: " + hours.toString().padStart(2, '0') + " : ";
        timeRemainingString += minutes.toString().padStart(2, '0') + " : ";
        timeRemainingString += seconds.toString().padStart(2, '0');

        descString = "Save and return to the Dawn of<br>the First Day?<br>&nbsp;&nbsp;&nbsp;Yes<br>&nbsp;&nbsp;&nbsp;No";
    }

    if (timeDifference == 0)
        descString = ""

    document.getElementById("timeLeft").innerHTML = timeRemainingString;
    document.getElementById("invertedPercent").innerHTML = invertedTimeString;
    document.getElementById("invertedPercentLastTwo").innerHTML = invertedPercentLastTwo + "%";
    document.getElementById("description").innerHTML = descString;

}

// Call the updateTimer() function initially to set the initial value
updateTimer();

// Call the updateTimer() function every second (1000 milliseconds)
setInterval(updateTimer, 30);
