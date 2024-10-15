//Bruno diaz
//jazmin tava


let imagenes = []; // Array para almacenar las imágenes
let orden = 0; // Variable para almacenar el índice de la imagen actual
//let textos = [];

// Objeto para almacenar las propiedades del botón
const boton = { x: 10, y: 10, width: 100, height: 40 };

function preload() {
  for (let i = 0; i < 9; i++) {
    imagenes[i] = loadImage("data/foto" + i + ".png"); // Cargar imágenes en el arreglo
  }
  
  //textos =loadStrings("data/floramarilla.txt");
}

function setup() {
  createCanvas(640, 480);
  resizeImagenes(); // Redimensionar imágenes
 
}

function draw() {
  background(0);
  cargarImagen(imagenes[orden], 0, 0, 640, 480); // Cargar la imagen actual
  dibujarBoton(); // Dibuja el botón
  
 // cuadroTexto(0,370,640,200); cuadro para poner el texto
}

// Función para redimensionar todas las imágenes
function resizeImagenes() {
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].resize(640, 480);
  }
}

// Función para cargar una imagen en el lienzo
function cargarImagen(img, x, y, width, height) {
  image(img, x, y, width, height); // Dibuja la imagen especificada
}

function dibujarBoton() {
  fill(255,255,0); // Color del botón
  rect(boton.x, boton.y, boton.width, boton.height); // Dibuja el rectángulo del botón
  fill(0); 
  textSize(16); 
  textAlign(CENTER, CENTER); // Alineación del texto
  text("Siguiente", boton.x + boton.width / 2, boton.y + boton.height / 2); // Dibuja el texto en el botón
}

function mousePressed() {
  // Verifica si el clic está dentro del área del botón
  if (mouseX > boton.x && mouseX < boton.x + boton.width && mouseY > boton.y && mouseY < boton.y + boton.height) {
    orden = (orden + 1);
  }
}

//function cuadroTexto(x,y,al,an){
 //rect(x,y,al,an);
  
