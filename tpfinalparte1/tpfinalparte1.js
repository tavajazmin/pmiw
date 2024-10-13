//Jazmin Tava Comision 1


let imagenes =[];

function preload(){
 for (let i=0;i<8; i++){
   imagenes[i] =loadImage("data/foto"+i+".png");
  
 }
}

function setup() {
  
createCanvas(640,480);
for(let i=0; i<8; i++){
  
 imagenes[i].resize(640,480); 
}
background(255);
}


function draw() {
cargarImagenes(imagenes,2,0,0,480,480,LEFT);
}

function cargarImagenes(){
  
 image(imagenes[0],0,0,640,480);
  
}

  
  
