

// Function to update the timer value_days

function updateTimer() {


    // Calculate the time difference

    var now = new Date();
    var targetDate = new Date("May 12, 2023 12:00:00");
    var timeDifference = targetDate - now - (12 * 60 * 60 + 60 * 60 * 24 * 0) * 1000;
    timeDifference = (timeDifference / (1000 * 60 * 60 * 24));

    if (timeDifference < 0) {
        timeDifference = 0;
    }


    // Calculate the inverted value_days (100% divided by time difference in seconds)
    
    var invertedPercentvalue_days = (100 / timeDifference).toFixed(4);
    var invertedPercentLastTwo = "";

    if (timeDifference > 0){
        invertedPercentLastTwo = invertedPercentvalue_days.slice(-2) + "%";
        invertedPercentRemaining = invertedPercentvalue_days.slice(0, -2);
    }
    else
    {
        invertedPercentLastTwo = "%";
        invertedPercentRemaining = "Infinity";
    }


    // Display the time update value_days on the webpage

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
    document.getElementById("invertedPercentLastTwo").innerHTML = invertedPercentLastTwo;
    document.getElementById("description").innerHTML = descString;


    // calculate moon size

    var thirdDaySize = 0.11;
    var endSize = 4.35;
    var factor = - 3 * thirdDaySize / (endSize - thirdDaySize);

    var size = 3 * thirdDaySize / timeDifference;
    //var size = factor * endSize / (-timeDifference + factor);    
    var imgs = document.getElementsByClassName("image-moon");

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.transform = "translateX(-50%) translateY(-50%) translateX(935px) translateY(430px) scale(" + size + ") ";
    }

    // set the font color

    var factor = 0.16;
    var value_days = factor / (factor + timeDifference); 
    var value_hours = (0.5 - timeDifference * 24) / 0.5; 
    var value_seconds = (10 - timeDifference * 24 * 60 * 60) / 10; 

    var divs = document.getElementsByClassName("font-color");

    var color1 = "#41b081";
    var color2 = "#FF0000";
    var interpolatedColor = interpolateHexColor(color1, color2, value_days);
    if (value_seconds > 0)
        interpolatedColor = interpolateHexColor(interpolatedColor, "#FFFFFF", value_seconds);

    for (var i = 0; i < divs.length; i++) {
        divs[i].style.color = interpolatedColor;
    }


    // set moon color

    var totalOpacity = 0.1;

    document.getElementById("moon").style.opacity = totalOpacity * (1 - value_days);
    document.getElementById("moon-red").style.opacity = totalOpacity * value_days;

    if (value_seconds > 0) {
        var value_days = value_hours;
        document.getElementById("moon").style.opacity = 0;
        document.getElementById("moon-red").style.opacity = totalOpacity * (1 - value_seconds);
        document.getElementById("image-done").style.opacity = value_seconds;
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


updateTimer();

setInterval(updateTimer, 30);
