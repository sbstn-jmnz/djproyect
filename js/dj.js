var numero = false;
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");

function play1(valor){
  if(valor==false){
	 document.getElementById("audio1").play();
   valor = true;
  }
	//var html = "";
	//$(".progress-bar").css("width","10%")
	return valor;
}
function stop1(valor){
  if(valor==true){
	 document.getElementById("audio1").pause();
   valor = false;
  }
	return valor;
}
function loop1(){
	document.getElementById("audio1").loop();
}

function play2(valor){
	if(valor==false){
   document.getElementById("audio2").play();
   valor = true;
  }
	return valor;
}
function stop2(valor){
	if(valor==true){
   document.getElementById("audio2").pause();
   valor = false;
  }
  return valor;
}


function init(){
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
  return false;
}
function loop2(){
	document.getElementById("audio2").loop();
}

function playStopAll(){
	if(numero==true){
    stop1(true);
    stop2(true);
    numero = false;
  }else{
    play1(false);
    play2(false);
    numero = true;
  }
}
////////////Slider/////////////////
$(function() {  
  
    var slider = $('#slider'),  
        tooltip = $('.tooltip');  
    var slider2 = $('#slider2'),  
        tooltip = $('.tooltip');
    var slider3 = $('#slider3'),  
        tooltip = $('.tooltip');    
  
    tooltip.hide();  
  
    slider.slider({  
        range: "min",  
        min: 1,  
        value: 35,  
  
        start: function(event,ui) {  
          tooltip.fadeIn('fast');  
        },  
  
        slide: function(event, ui) {  
  
            var value = slider.slider('value'),  
                volume = $('.volume'); 

            var value2 = value/100;
            audio1.volume = value2;

            tooltip.css('left', value).text(ui.value);  
  
            if(value <= 5) {   
                volume.css('background-position', '0 0');  
            }   
            else if (value <= 25) {  
                volume.css('background-position', '0 -25px');  
            }   
            else if (value <= 75) {  
                volume.css('background-position', '0 -50px');  
            }   
            else {  
                volume.css('background-position', '0 -75px');  
            };  
  
        },  
  
        stop: function(event,ui) {  
          tooltip.fadeOut('fast');  
        },  
    });

    slider2.slider({  
        range: "min",  
        min: 1,  
        value: 35,  
  
        start: function(event,ui) {  
          tooltip.fadeIn('fast');  
        },  
  
        slide: function(event, ui) {  
  
            var value3 = slider2.slider('value'),  
                volume2 = $('.volume'); 

            var value4 = value3/100;
            audio2.volume = value4;

            tooltip.css('left', value4).text(ui.value);  
  
            if(value4 <= 5) {   
                volume2.css('background-position', '0 0');  
            }   
            else if (value4 <= 25) {  
                volume2.css('background-position', '0 -25px');  
            }   
            else if (value4 <= 75) {  
                volume2.css('background-position', '0 -50px');  
            }   
            else {  
                volume2.css('background-position', '0 -75px');  
            };  
  
        },  
  
        stop: function(event,ui) {  
          tooltip.fadeOut('fast');  
        },  
    }); 

    slider3.slider({  
        range: "min",  
        min: 1,  
        value: 35,  
  
        start: function(event,ui) {  
          tooltip.fadeIn('fast');  
        },  
  
        slide: function(event, ui) {  
  
            var value5 = slider3.slider('value'),  
                volume3 = $('.volume'); 

            var value6 = value5/100;
            audio1.volume = value6;
            audio2.volume = value6;

            tooltip.css('left', value6).text(ui.value);  
  
            if(value6 <= 5) {   
                volume3.css('background-position', '0 0');  
            }   
            else if (value6 <= 25) {  
                volume3.css('background-position', '0 -25px');  
            }   
            else if (value6 <= 75) {  
                volume3.css('background-position', '0 -50px');  
            }   
            else {  
                volume3.css('background-position', '0 -75px');  
            };  
  
        },  
  
        stop: function(event,ui) {  
          tooltip.fadeOut('fast');  
        },  
    });    
  
});  

/////////Aqui es donde bailan las chiquillas////////////////
var html = "";
var j = 1;

function bailar(){
  html = "<img src='img/play1_"+j+".png'>";
  $("#girlImage").html(html);
  j++;
  if(j>5){
    j=1;
  }
}

function bailar2(){
  html = "<img src='img/play2_"+j+".png'>";
  $("#girlImage2").html(html);
  j++;
  if(j>5){
    j=1;
  }
}

intervalHandler = setInterval(bailar, 250);
intervalHandler = setInterval(bailar2, 250);