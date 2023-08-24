// Init value if null
if (!getCookie("userFocusTime")) {
    setCookie("userFocusTime", 0)
}
if (!getCookie("userRelaxTime")) {
    setCookie("userRelaxTime", 0);
}
if (!getCookie("userSleepTime")) {
    setCookie("userSleepTime", 0);
}

var userFocusTime = parseInt(getCookie("userFocusTime"));
var userFocusText = document.querySelector('[name="focus-time"');
var userFocusBar = document.querySelector('[name="focus-progress"');

var userRelaxTime = parseInt(getCookie("userRelaxTime"));
var userRelaxText = document.querySelector('[name="relax-time"');
var userRelaxBar = document.querySelector('[name="relax-progress"');

var userSleepTime = parseInt(getCookie("userSleepTime"));
var userSleepText = document.querySelector('[name="sleep-time"');
var userSleepBar = document.querySelector('[name="sleep-progress"');

var userTotalTime = userFocusTime + userRelaxTime + userSleepTime;

document.getElementById("time-spent-digit").textContent = userTotalTime;

userFocusText.textContent = userFocusTime + "m";
userRelaxText.textContent = userRelaxTime + "m";
userSleepText.textContent = userSleepTime + "m";

userFocusBar.style.width = (userFocusTime / userTotalTime * 100) + '%';
userRelaxBar.style.width = (userRelaxTime / userTotalTime * 100) + '%';
userSleepBar.style.width = (userSleepTime / userTotalTime * 100) + '%';

if (userSleepTime == 0) {
    if (!(userRelaxTime == 0)) {
        userRelaxBar.style.borderRadius = "0 1vh 1vh 0";
    } else {
        userFocusBar.style.borderRadius = "1vh";
    }
}

if (userFocusTime == 0) {
    if (!(userSleepTime == 0)) {
        userSleepBar.style.borderRadius = "0 1vh 1vh 0";
    } else {
        userRelaxBar.style.borderRadius = "1vh";
    }
}

if (userTotalTime == 0) {
    console.log("hello is me");
    userRelaxBar.style.display = "none";
    userSleepBar.style.display = "none";
    userFocusBar.style.borderRadius = "1vh";
    userFocusBar.style.backgroundColor = "#999999";
    userFocusBar.style.width = "100vh";
}