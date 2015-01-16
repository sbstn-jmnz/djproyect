var dogBarkingBuffer = null;
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

function loadSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      dogBarkingBuffer = buffer;
    }, onError);
  }
  request.send();
}

function play1(){
	document.getElementById("audio1").play();
}

function stop1(){
	document.getElementById("audio1").pause();
}

function play2(){
	document.getElementById("audio2").play();
}

function stop2(){
	document.getElementById("audio2").pause();
}