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


