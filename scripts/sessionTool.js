function shuffleSong() {
    for (var i = modeSongList.length - 1; i > 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));

        [modeSongList[i], modeSongList[randomIndex]] = [modeSongList[randomIndex], modeSongList[i]];
        [modeNameList[i], modeNameList[randomIndex]] = [modeNameList[randomIndex], modeNameList[i]];
        [modeArtistList[i], modeArtistList[randomIndex]] = [modeArtistList[randomIndex], modeArtistList[i]];
    }
}

// Get/Set default time
if (!getCookie("userCountdownTime")) {
    setCookie("userCountdownTime", 10)
}

var userCountdownTime = getCookie("userCountdownTime");
var currentMode = new URLSearchParams(window.location.search).get("mode");

document.getElementById("mode").textContent = "DeStress•" + currentMode.charAt(0).toUpperCase() + currentMode.slice(1) + " Mode";

var modeSongList = [];
var modeNameList = [];
var modeArtistList = [];

if (!getCookie("userEnableTapInfo")) {
    setCookie("userEnableTapInfo", 0);
}

var userEnableTapInfo = getCookie("userEnableTapInfo");

// hardcode all song data for demo release
switch (currentMode) {
    case "focus":
        modeSongList = ["tracks/focus/f1.mp3", "tracks/focus/f2.mp3", "tracks/focus/f3.mp3", "tracks/focus/f4.mp3", "tracks/focus/f5.mp3"];
        modeNameList = ["Deuces", "Faster Does It", "George Street Shuffle", "Mining by Moonlight", "Nouvelle Noel"];
        modeArtistList = ["Kelvin McLeod (incompetech.com)", "Kelvin McLeod (incompetech.com)", "Kelvin McLeod (incompetech.com)", "Kelvin McLeod (incompetech.com)", "Kelvin McLeod (incompetech.com)",];
        break;
    case "relax":
        modeSongList = ["tracks/relax/r1.mp3", "tracks/relax/r2.mp3", "tracks/relax/r3.mp3", "tracks/relax/r4.mp3", "tracks/relax/r5.mp3"];
        modeNameList = ["Sounds of Nature", "Sounds of Nature", "Sounds of Nature", "Sounds of Nature", "Sounds of Nature"];
        modeArtistList = ["Nature", "Nature", "Nature", "Nature", "Nature"];
        break;
    case "sleep":
        modeSongList = ["tracks/sleep/s1.mp3", "tracks/sleep/s2.mp3", "tracks/sleep/s3.mp3", "tracks/sleep/s4.mp3", "tracks/sleep/s5.mp3"];
        modeNameList = ["Clair De Lune", "Rêverie", "The Planets: Venus, the Bringer of Peace", "Moonlight Sonata, First Movement", "Träumerei"];
        modeArtistList = ["Claude Debussy", "Claude Debussy", "Gustav Holst", "Ludwig van Beethoven", "Robert Schumann"];
        break;
    default:
        break;
}
shuffleSong();
songNameFactory(modeSongList, modeNameList, modeArtistList, userEnableTapInfo);

var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (!getCookie("userEnableTapStart")) {
  setCookie("userEnableTapStart", 0);
}

if (isIOS || getCookie("userEnableTapStart") == 1) {
  var tapDiv = document.getElementById("tap-div");
  var elements = document.body.getElementsByClassName("*");

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element !== tapDiv) {
      element.style.display = "none";
    }
  }
  tapDiv.style.display = "block";

  tapDiv.addEventListener("click", function() {
    tapDiv.style.animation = "fadeOut 0.5s forwards";

    setTimeout(function() {
      tapDiv.style.display = "none";
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element !== tapDiv) {
          element.style.display = "";
        }
      }
    }, 500);
  });
}

sessionTimer(userCountdownTime, currentMode)

if (!getCookie("userEnableS2C")) {
    setCookie("userEnableS2C", 0);
}

if (getCookie("userEnableS2C") == 1) {
    startS2C(0);
}