//Lo primero que hace es llamar a la funcion init al cargar la pag
window.onload = ini;
//Se generan 2 variable vacias que se usaran en el init
//La primera servira para guardar el audioContext
var contexto;
//La segunda servira para guardar el cargador de buffer 
var bufferLoader;

function BufferLoader(contexto, urlList, callback) {

	this.contexto = contexto;
	this.urlList = urlList;
  //Esta propiedad es clave porque llama al metodo que se ejecuta al llamar  al metodo .onload
  //this.onload = callback;
  this.bufferList = new Array();
  this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, index) {
	//Esta funcion recibe la url del archivo de audio junto con su indice	
  // Load buffer asynchronously
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";
  //genera una variable local con su mismo objeto llamada loader
  var loader = this;

  request.onload = function(){
    // Asynchronously decode the audio file data in request.response
    loader.contexto.decodeAudioData(request.response,function(buffer){
    	//console.log(buffer);
      	// los buffer son los objetos con los archivos de audio. console.log(buffer);
      	if (!buffer) {
        	//Si los buffer estan vacios tira el error en la alerta y sale
        	alert('error decoding file data: ' + url);
        	return;
        }
        //Si los buffer estan ok lo agrega a la propiedad buffer list que es un array con cada sonido
        loader.bufferList[index] = buffer;
        //console.log(loader);
        if (++loader.loadCount == loader.urlList.length){
        	//loader.onload(loader.bufferList);
        	//El loader tiene el metodo on load que es el metodo finishedLoading que toca los archivos solo cuando
        	//todos los archivos estan en el bufferList	
          	//console.log(bufferList);
        }
      },
      function(error) {
      	console.error('decodeAudioData error', error);
      }
      );
}

request.onerror = function() {
	alert('BufferLoader: XHR error');
}

request.send();
}

BufferLoader.prototype.load = function() {
  //Esta funcion llama a la funcion loadbuffer por cada elemento en
  //su propiedad urlList que son las direcciones de los archivos de audio	
  for (var i = 0; i < this.urlList.length; ++i)

  	this.loadBuffer(this.urlList[i], i);
}

function ini() {
  //Init parte al cargar la pagina y asigna al nuevo AudioContext a la variable contexto
  // Fix up prefixing
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  contexto = new AudioContext();
  //Luego se asigna un nuevo cargador de buffer con 3 vaiables para el constructor
  bufferLoader = new BufferLoader(
  	// pasa la variable contexto (clase AudioContext) al construcor
  	contexto,
    //pasa tambien el url list como array
    [
    '../audios/TMKD.wav',
    '../audios/TMKD01.wav',
    '../audios/hat.wav',
    '../audios/tom.wav',
    ]//,
    //finalmente pasa la funcion finishedLoading como callback al constructor
    //finishedLoading
    );
  //termina llamando al metodo load de la instacia bufferLoader creada
  bufferLoader.load();
}

function tocarBombo() {
  var bufferList = bufferLoader.bufferList;
  var source2 = contexto.createBufferSource();
  source2.buffer = bufferList[1];
  source2.connect(contexto.destination);
  source2.start(0);
}

function tocarCaja() {
  var bufferList = bufferLoader.bufferList;
  var source1 = contexto.createBufferSource();
  source1.buffer = bufferList[0];
  source1.connect(contexto.destination);
  source1.start(0);
}
function tocarHats() {
  var bufferList = bufferLoader.bufferList;
  var source1 = contexto.createBufferSource();
  source1.buffer = bufferList[2];
  source1.connect(contexto.destination);
  source1.start(0);
}
function tocarTom() {
  var bufferList = bufferLoader.bufferList;
  var source1 = contexto.createBufferSource();
  source1.buffer = bufferList[3];
  source1.connect(contexto.destination);
  source1.start(0);
}