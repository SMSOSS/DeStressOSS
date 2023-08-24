let timeoutId;

function hideElements() {
    document.getElementById("music-div").style.visibility = "hidden";
    document.getElementById("mode").style.visibility = "hidden";
}

function resetTimeout() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(hideElements, 10000);
    document.getElementById("music-div").style.visibility = "visible";
    document.getElementById("mode").style.visibility = "visible";
}

resetTimeout();

document.addEventListener("click", resetTimeout); 

function sessionTimer(userTime, userMode) {
    const timeDigit = document.getElementById("time-digit");

    const duration = userTime * 60;

    let currentTime = duration;

    const interval = setInterval(() => {
        const minutes = Math.ceil(currentTime / 60);

        timeDigit.textContent = `${minutes.toString().padStart(2, '0')}`;

        currentTime--;

        if (currentTime < 0) {
            clearInterval(interval);
            window.location.href = "session-end.html?time=" + userTime + "&mode=" + userMode;
        }
    }, 1000);
}