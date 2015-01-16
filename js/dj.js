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

var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");

function play1(){
	document.getElementById("audio1").play();
	//var html = "";
	//$(".progress-bar").css("width","10%")
	return true;
}
function stop1(){
	document.getElementById("audio1").pause();
	return false;
}
function loop1(){
	document.getElementById("audio1").loop();
}

function play2(){
	document.getElementById("audio2").play();
	return true;
}
function stop2(){
	document.getElementById("audio2").pause();
<<<<<<< HEAD
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
=======
	return false;
}
function loop2(){
	document.getElementById("audio2").loop();
}

function playStopAll(){
	if(play1()==true || play2()==true){
		stop1();
		stop2();
	}else{
		play1();
		play2();
	}
}

$(function() {  
    $( "#slider" ).slider();  
});  

var slider = $('#slider');  

slider.slider({  
    range: "min",  
    value: 35,  
});  

>>>>>>> dd02cec25516801d19fb90142751683dada77cbe
