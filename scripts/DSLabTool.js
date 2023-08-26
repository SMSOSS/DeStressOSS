// Init settings if user have not done so
if (!getCookie("userCountdownTime")) {
    setCookie("userCountdownTime", 10)
}
if (!getCookie("userEnableTapInfo")) {
    setCookie("userEnableTapInfo", 0);
}
if (!getCookie("userEnableS2C")) {
    setCookie("userEnableS2C", 0);
}

if (!getCookie("userEnableTapStart")) {
    setCookie("userEnableTapStart", 0);
}

var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

var timerSetting = document.getElementById("timer");
var timerValue = getCookie("userCountdownTime");
timerSetting.value = timerValue;

var tapStartSetting = document.getElementById("enableTapStart");
var tapStartValue = getCookie("userEnableTapStart");
tapStartSetting.value = tapStartValue;

var tapInfoSetting = document.getElementById("enableTapInfo");
var tapInfoValue = getCookie("userEnableTapInfo");
tapInfoSetting.value = tapInfoValue;

var S2CSetting = document.getElementById("enableS2C");
var S2CValue = getCookie("userEnableS2C");
S2CSetting.value = S2CValue;

timerSetting.addEventListener("change", function (event) {
    var newTimerValue = event.target.value;
    setCookie("userCountdownTime", newTimerValue);
});

// only show tapStart for Android as iOS has forced tapStart
if (!isIOS) {
    tapStartSetting.addEventListener("change", function (event) {
        var newTapStartValue = event.target.value;
        setCookie("userEnableTapStart", newTapStartValue);
    });
} else {
    document.querySelector('[name="tts"]').style.display = "none";
}

tapInfoSetting.addEventListener("change", function (event) {
    var newTapInfoValue = event.target.value;
    setCookie("userEnableTapInfo", newTapInfoValue);
});

S2CSetting.addEventListener("change", function (event) {
    var newS2CValue = event.target.value;
    setCookie("userEnableS2C", newS2CValue);
});