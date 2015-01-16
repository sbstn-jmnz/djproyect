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

var canvas = document.getElementById('myCanvas');    
    var context = canvas.getContext('2d');
    var counter = 0

    function step()
    {
        counter++;
        for (var i = 0; i < 300; i++){
          for (var j = 0; j < 300; j++)  {
                if ((i + j + counter) % 2 == 0) {
                    context.fillStyle = '#1C61FD';
                } else {
                    context.fillStyle = '#DE2AFD';
                }
                context.fillRect(i * 50, j * 50, 49, 49); // X, Y, 
        }
      }
    }
    intervalHandler = setInterval(step, 600);
