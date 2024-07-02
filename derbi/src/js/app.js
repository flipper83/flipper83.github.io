document.addEventListener("DOMContentLoaded", () => {

});

function score(team,value) {
  const element = document.getElementById(team)
  var score = parseInt(element.textContent);
  score +=parseInt(value);
  if (score < 0) {
    score = 0;
  }
  element.textContent = score;
}

var elem = document.documentElement;
function fullscreen() {
  if (document.fullscreenElement != null) {
    closeFullscreen();
    return;
  }

  openFullscreen();
}

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}