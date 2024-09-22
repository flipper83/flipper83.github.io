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
  
  if (value > 0) {
    var bgEffect = document.getElementById('bg_effect_gol');
    bgEffect.muted = false;
    bgEffect.loop = false;
    bgEffect.play();
  }
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

function mute() {
  var bgMusic = document.getElementById('bg_music');
  bgMusic.muted = true;

  var soundOn = document.getElementById('sound_on');
  var soundOff = document.getElementById('sound_off');

  soundOn.style.display = 'none'
  soundOff.style.display = 'block'
}

function play() {
  var bgMusic = document.getElementById('bg_music');
  bgMusic.muted = false;
  bgMusic.play();
  
  var soundOn = document.getElementById('sound_on');
  var soundOff = document.getElementById('sound_off');

  soundOn.style.display = 'block'
  soundOff.style.display = 'none'
}

