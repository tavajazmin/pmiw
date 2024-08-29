// Jazmin Tava Comision 1
// https://youtu.be/Q7q69BKAWc8
//presionar "r" para volver a la posicion/color inicial

let foto;
let blanco =255;
var tami =tamano (4.8,100);
let  ninja= true;

function preload(){
 foto = loadImage('/data/opt.jpg'); 
}

function setup() {
  
  createCanvas(800, 400);
background(0);
 
  blanco = color(255);

  mouseX=600;
  mouseY=200;
}
function draw() {
  
  background (0);

  image ( foto, 0, 0, 400, 400);

  optico(0,250,20);
  
  if (!ninja)
    botones(255, 0, 200, 350, 10, 100, 40);
}
