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

