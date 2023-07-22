
var moon_opacity = 0.19;


// Function to update the timer value_days

function updateTimer() {


    // Calculate the time difference

    var now = new Date();
    var targetDate = new Date("September 6, 2023 12:00:00");
    var timeDifference = targetDate - now - (12 * 60 * 60 ) * 1000;
    timeDifference = (timeDifference / (1000 * 60 * 60 * 24));

    var preorderDate = new Date("September 1, 2023 12:00:00")
    var preorderDifference = preorderDate - now - (12 * 60 * 60) * 1000;
    preorderDifference = (preorderDifference / (1000 * 60 * 60 * 24));

    // Update description

    var descString = getDescription(timeDifference);

    // Calculate the inverted value_days (100% divided by time difference in seconds)

    if (timeDifference < 0) {
        timeDifference = 0;
    }

    var invertedPercentvalue_days = (100 / timeDifference).toFixed(4);
    var invertedPercentLastTwo = "";

    if (timeDifference > 0){
        invertedPercentLastTwo = invertedPercentvalue_days.slice(-2) + "%";
        invertedPercentRemaining = invertedPercentvalue_days.slice(0, -2);
    }
    else
    {
        invertedPercentLastTwo = "";
        invertedPercentRemaining = "Infinity%";
    }

    // Calculate the inverted value_days for preorder timer

    if (preorderDifference < 0) {
        preorderDifference = 0;
    }

    var preorderPercentvalue_days = (100 / preorderDifference).toFixed(4)
    var preorderPercentLastTwo = "";

    if (preorderDifference > 0) {
        preorderPercentLastTwo = preorderPercentvalue_days.slice(-2) + "%";
        preorderPercentRemaining = preorderPercentvalue_days.slice(0, -2);
    } else {
        preorderPercentLastTwo = "";
        preorderPercentRemaining = "Infinity%";
    }

    // Display the time update value_days on the webpage

    var timeRemainingString;
    var invertedTimeString = "Inverted Time: " + invertedPercentRemaining;

    if (timeDifference > 3) {
        var days = timeDifference.toFixed(2);
        timeRemainingString = "Countdown: " + days + " days left";
    }
    else if (timeDifference > 0.25) {
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
    }

    var preorderRemainingString;
    var preorderTimeString = "Inverted Time: " + preorderPercentRemaining;

    if (preorderDifference > 3) {
        var pdays = preorderDifference.toFixed(2)
        preorderRemainingString = "Countdown: " + pdays + " days left"
    } else if (preorderDifference > 0.25) {
        var phours = (preorderDifference * 24).toFixed(2)
        preorderRemainingString = phours + " Hours Remain"
    } else {
        var phours = Math.floor(preorderDifference * 24);
        var pminutes = Math.floor((preorderDifference * 24 - phours) * 60);
        var pseconds = Math.floor(((preorderDifference * 24 - phours) * 60 - pminutes) * 60);

        preorderRemainingString = "Time Remaining: " + phours.toString().padStart(2, '0') + " : ";
        preorderRemainingString += pminutes.toString().padStart(2, '0') + " : ";
        preorderRemainingString += pseconds.toString().padStart(2, '0');
    }

    document.getElementById("timeLeft").innerHTML = timeRemainingString;
    document.getElementById("invertedPercent").innerHTML = invertedTimeString;
    document.getElementById("invertedPercentLastTwo").innerHTML = invertedPercentLastTwo;
    document.getElementById("description").innerHTML = descString;

    document.getElementById("preorderTimeLeft").innerHTML = preorderRemainingString
    document.getElementById("preorderInvertedPercent").innerHTML = preorderTimeString
    document.getElementById("preorderInvertedPercentLastTwo").innerHTML = preorderPercentLastTwo

}



function updateTimerSlow() {

    // Calculate the time difference

    var now = new Date();
    var targetDate = new Date("September 6, 2023 12:00:00");
    var timeDifference = targetDate - now - (12 * 60 * 60 ) * 1000;
    timeDifference = (timeDifference / (1000 * 60 * 60 * 24));

    var preorderDate = new Date("September 1, 2023 12:00:00")
    var preorderDifference = preorderDate - now - (12 * 60 * 60) * 1000;
    preorderDifference = (preorderDifference / (1000 * 60 * 60 * 24));

    if (timeDifference < 0) {
        timeDifference = 0;
    }

    // set the font color

    var factor = 0.4; // 0.26
    var value_days = factor / (factor + timeDifference); 
    var value_seconds = (10 - timeDifference * 24 * 60 * 60) / 10; 

    var divs = document.getElementsByClassName("font-color");

    var color1 = "#d4ac64";
    var color2 = "#cc2434";
    var interpolatedColor = interpolateHexColor(color1, color2, value_days);
    if (value_seconds > 0)
        interpolatedColor = interpolateHexColor(interpolatedColor, "#FFFFFF", value_seconds);

    for (var i = 0; i < divs.length; i++) {
        divs[i].style.color = interpolatedColor;
    }

    // Update the background image according to the current date
    var body = document.body;

    if (now >= targetDate) {
        // Set the background image if target date has been reached or passed
        body.style.backgroundImage = "url('starfield_bg-3.jpg')";
    } else if (now >= preorderDate && now < targetDate) {
        // Set the background image if preorder date has been reached or passed but target date has not
        body.style.backgroundImage = "url('starfield_bg-2.jpg')";
    } else {
        // Default background image before preorder date
        body.style.backgroundImage = "url('starfield_bg-1.jpg')";
    }
}


// Function to interpolate between two colors

function interpolateHexColor(color1, color2, value_days) {
  // Convert the hex color codes to RGB value_dayss
  var r1 = parseInt(color1.substring(1, 3), 16);
  var g1 = parseInt(color1.substring(3, 5), 16);
  var b1 = parseInt(color1.substring(5, 7), 16);
  var r2 = parseInt(color2.substring(1, 3), 16);
  var g2 = parseInt(color2.substring(3, 5), 16);
  var b2 = parseInt(color2.substring(5, 7), 16);

  // Interpolate between the RGB value_dayss
  var r = Math.round(r1 + (r2 - r1) * value_days);
  var g = Math.round(g1 + (g2 - g1) * value_days);
  var b = Math.round(b1 + (b2 - b1) * value_days);

  // Convert the result back to hex
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


function getDescription(timeDifference) {
    var descString = "";

    descString = "Out of the days left right now, <br>what percent of that will be covered <br>with one more day of waiting.";

    return descString;
}


updateTimer();
updateTimerSlow();

setInterval(updateTimer, 10);
setInterval(updateTimerSlow, 100);
