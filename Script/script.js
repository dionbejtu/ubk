function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var meridiem = "AM";

    if (hours > 12) {
        hours = hours - 12;
        meridiem = "PM";
    }

    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var clockDiv = document.getElementById("ora");
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
}

setInterval(showTime, 1000);
