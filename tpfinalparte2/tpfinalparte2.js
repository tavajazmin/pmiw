//Jazmin Tava
//Bruno Diaz
let iMenu,iCreditos,iFondo,iAmarillo,iAzul;
let menuPrincipal ;
let sonido;
function preload(){
  
 iMenu = loadImage ("data/menu.jpg");
 iCreditos = loadImage("data/creditos.jpg");
 iFondo = loadImage("data/fondo.jpg");
 iAmarillo =loadImage("data/amarillo.png");
 iAzul = loadImage ("data/azul.png");
 sonido = loadSound("data/cato.mp3");
 
}


function setup() {
createCanvas(640,480);
menuPrincipal = new Menu ();
}


function draw() {
menuPrincipal.mostrar();
}

function mousePressed(){
 menuPrincipal.cambiar();
}
function keyPressed() {
  menuPrincipal.teclapresionada(keyCode); 
}

function keyReleased() {
  menuPrincipal.teclapresionLiberada(keyCode); 
}
