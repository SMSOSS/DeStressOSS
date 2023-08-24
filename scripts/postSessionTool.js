var minutesCompleted = parseInt(new URLSearchParams(window.location.search).get("time"));
var previousMode = new URLSearchParams(window.location.search).get("mode");

document.getElementById("time-digit").textContent = minutesCompleted;
var activeCookie = "";

switch (previousMode) {
    case "focus":
        activeCookie = "userFocusTime";
        break;
    case "relax":
        activeCookie = "userRelaxTime";
        break;
    case "sleep":
        activeCookie = "userSleepTime";
        break;
    default:
        break;
}

// write to cookie
if (!getCookie(activeCookie)) {
    setCookie(activeCookie, minutesCompleted);
} else {
    var t = parseInt(getCookie(activeCookie)) + minutesCompleted;
    setCookie(activeCookie, t);
}