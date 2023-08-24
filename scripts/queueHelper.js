var currentSongIndex, currentAction = 0;
var songList, nameList, artistList = [];

function playNextSong() {
  var audioPlayer = document.getElementById('audioPlayer');
  var event = new Event('ended');
  audioPlayer.dispatchEvent(event);
  resetTimeout();
}

function startS2C(invertSwipeDistance) {
  var musicDiv = document.getElementById('music-div');
  var startX = 0;
  var distX = 0;

  musicDiv.addEventListener('touchstart', function (event) {
    startX = event.touches[0].clientX;
  });

  musicDiv.addEventListener('touchmove', function (event) {
    distX = event.touches[0].clientX - startX;
  });

  musicDiv.addEventListener('touchend', function (event) {
    var swipeThreshold = invertSwipeDistance ? -150 : 150;
    if (distX > swipeThreshold && invertSwipeDistance || distX < -swipeThreshold && !invertSwipeDistance) {
      playNextSong();
    }
    startX = 0;
    distX = 0;
  });
}

function songNameFactory(songList, nameList, artistList, shouldEnableTapInfo) {
  var audioPlayer = document.getElementById("audioPlayer");
  var musicDiv = document.getElementById("music-div");
  var currentSongIndex = 0;
  var currentAction = 0;

  // feature: set song name and artist name first
  document.getElementById("music-song").firstChild.textContent = nameList[currentSongIndex] + "\n";
  document.getElementById("music-artist").textContent = artistList[currentSongIndex];

  if (shouldEnableTapInfo) {
    musicDiv.addEventListener("click", function () {
      currentAction++;
      if (currentAction == 1) {
        document.getElementById("music-song").firstChild.textContent = "Next Song\n";
        document.getElementById("music-artist").textContent = nameList[currentSongIndex + 1] + " by " + artistList[currentSongIndex + 1];
      } else if (currentAction == 2 && !(currentSongIndex == 0)) {
        document.getElementById("music-song").firstChild.textContent = "Previous Song\n";
        document.getElementById("music-artist").textContent = nameList[currentSongIndex - 1] + " by " + artistList[currentSongIndex - 1];
      } else if (currentAction >= 3 || currentAction == 0 || currentAction == 2 && currentSongIndex == 0) {
        document.getElementById("music-song").firstChild.textContent = nameList[currentSongIndex];
        document.getElementById("music-artist").textContent = artistList[currentSongIndex];
        currentAction = 0;
      }
    });
  }

  audioPlayer.addEventListener("ended", function () {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    audioPlayer.src = songList[currentSongIndex];
    audioPlayer.play();
    document.getElementById("music-song").firstChild.textContent = nameList[currentSongIndex];
    document.getElementById("music-artist").textContent = artistList[currentSongIndex];
  });
}