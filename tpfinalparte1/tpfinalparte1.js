//Jazmin Tava
//Bruno Diaz



let fotos = [];
let estado;
let sonido;
let texto  = [];

function preload() {
sonido =loadSound("data/cajaloop.mp3");
textos = loadStrings("data/floramarilla.txt");
  
  for (let i=0; i<16; i++) {
    fotos[i] = loadImage("data/foto"+i+".png");
  }
}

function setup() {
  createCanvas(640, 480);
  for (let i=0; i<15; i++) {
    fotos[i].resize(640, 480);
  }
  estado = "inicio";
 
}
 function cargarFotos(imag, index, x, y) {
    image(imag[index], x, y);
  }
function draw() {
  background(0);

  if (estado==="inicio") {
    cargarFotos(fotos, 0, 0, 0);
    dibujarBoton(220, 380, 200, 50); // Botón para ir a primera
    cargarTextos(textos,0,240,15,200,200,20,255);
    cargarTextos(textos,1,250,390,200,200,30,0);
    
     dibujarBoton(450, 380, 150, 50); // Botón de creditos
     cargarTextos(textos,28,460,390,200,200,30,0);// TEXTO BOTON CREDITOS
 
} else if (estado==="primera") {
    cargarFotos(fotos, 1, 0, 0);
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a segunda 
    cuadroTexto();
    cargarTextos(textos,2,5,390,640,150,20,0);
     cargarTextos(textos,21,30,40,640,30,15,0); //TEXTO de CONTINUAR
    
  } else if (estado==="segunda") {
    cargarFotos(fotos, 2, 0, 0);
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a tercera
    dibujarBoton  ( 515, 25, 100, 50); // botón para ir a tercera_alt
    cuadroTexto();
    
    
    cargarTextos(textos,3,5,390,640,150,20,0); // texto de la historia
    cargarTextos(textos,4,26,40,640,30,15,0); //texto del boton tercero
    cargarTextos(textos,5,520,40,20,260,15,0); //texto del alterno
 
} else if (estado==="tercera") {
    cargarFotos(fotos, 3, 0, 0);
    dibujarBoton(  25, 25, 100, 50);   //Botón para ir a quinta
    cuadroTexto();
     cargarTextos(textos,6,5,390,640,150,20,0);
     cargarTextos(textos,21,30,40,640,30,15,0); //TEXTO de CONTINUAR
    
 
} else if (estado === "tercera_alt") {
    cargarFotos(fotos, 4, 0, 0); // Imagen del camino alterno
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a inicio
    cuadroTexto();
     cargarTextos(textos,19,30,40,640,30,15,0); //texto para volver a empezar
     cargarTextos(textos,18,5,390,640,150,20,0); //texto historia
    
} else if (estado==="cuarta") {
    cargarFotos(fotos, 5, 0, 0);
    dibujarBoton(  25, 25, 100, 50);  //Botón para ir a quinta
    dibujarBoton  ( 515, 25, 100, 50); // botón para ir a quinta_alt
    cuadroTexto();
    
     cargarTextos(textos,7,5,375,650,150,20,0); //texto historia
      cargarTextos(textos,9,27,35,100,200,13,0); //texto caminoalterno
      cargarTextos(textos,8,520,30,100,150,12,0); //texto del normal
 
} else if (estado==="quinta") {
    cargarFotos(fotos, 6, 0, 0);
    dibujarBoton(  25, 25, 100, 50); //Botón para ir a sexta
    cuadroTexto();
    
    cargarTextos(textos,10,5,375,630,150,17,0); //texto historia
     cargarTextos(textos,21,30,40,640,30,15,0); //TEXTO de CONTINUAR
    
} else if (estado === "quinta_alt") {
    cargarFotos(fotos, 7, 0, 0); // Imagen del camino alterno  
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a inicio
    cuadroTexto();
    
     cargarTextos(textos,19,30,40,640,30,15,0); //texto para volver a empezar
      cargarTextos(textos,23,5,375,630,150,17,0); //texto historia
 
} else if (estado==="sexta") {
    cargarFotos(fotos, 8, 0, 0);
    dibujarBoton(  25, 25, 100, 50);  //Botón para ir a septima
    dibujarBoton  ( 515, 25, 100, 50); // botón para ir a septima_alt
    cuadroTexto();
    cargarTextos(textos,11,5,375,650,150,20,0); //texto historia
  cargarTextos(textos,12,27,35,80,200,13,0); //texto camino normal    
  cargarTextos(textos,13,530,30,80,260,13,0); //texto del alterno
    
    
  }else if (estado==="septima") {
    cargarFotos(fotos, 9, 0, 0);
    dibujarBoton(  25, 25, 100, 50);  //Botón para ir a octava 
    cuadroTexto();
    
    cargarTextos(textos,14,5,375,650,150,20,0); //texto historia
     cargarTextos(textos,21,30,40,640,30,15,0); //TEXTO de CONTINUAR
     
  } else if (estado === "septima_alt") {
    cargarFotos(fotos, 10, 0, 0); // Imagen del camino alterno  
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a inicio
    cuadroTexto();
    
      cargarTextos(textos,24,5,375,650,150,20,0); //texto historia
     cargarTextos(textos,19,30,40,640,30,15,0); //texto para volver a empezar
    
   }else if (estado==="octava") {
    cargarFotos(fotos, 11, 0, 0);
     dibujarBoton(  25, 25, 100, 50); // Botón para ir a juego
     cuadroTexto();
     
     cargarTextos(textos,15,5,375,650,150,20,0); //texto historia
      cargarTextos(textos,21,30,40,640,30,15,0); //TEXTO de CONTINUAR
     
  }if (estado==="juego") {
    cargarFotos(fotos, 12, 0, 0);
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a decima
    
     cargarTextos(textos,16,5,375,650,150,20,255); //texto historia
     cargarTextos(textos,21,30,40,640,30,15,0); //TEXTO de CONTINUAR
  }if (estado==="decima") {
    cargarFotos(fotos, 13, 0, 0);
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a final
    cuadroTexto();
    
  cargarTextos(textos,17,5,375,650,150,20,0); //texto historia
  cargarTextos(textos,21,30,40,640,30,15,0); //TEXTO de CONTINUAR
   }if (estado==="onceava") {
    cargarFotos(fotos, 14, 0, 0, 640, 480);
    
    dibujarBoton(25, 25, 100, 50);  
    
    cuadroTexto();
     cargarTextos(textos,18,5,375,650,150,20,0); //texto historia
     cargarTextos(textos,22,30,40,640,30,15,0); //TEXTO de CONTINUAR
   }if (estado==="creditos") {
    cargarFotos(fotos, 15, 0, 0);
    
    dibujarBoton(25, 25, 100, 50);  
    
    cuadroTexto();
     cargarTextos(textos,25,70,150,650,150,30,0); //texto historia
      cargarTextos(textos,26,70,200,650,150,25,0);
       cargarTextos(textos,27,70,250,650,150,25,0);
     cargarTextos(textos,19,30,40,640,30,15,0); //TEXTO volver
   }
   }
function mousePressed() {

  //esto es para especificar qa que pantalla se mueve si sucede algo

  if (estado === "inicio") {
    if (areaBoton(220, 380, 200, 50)&& (!sonido.isPlaying())) {
      
      estado = "primera";  // Va a la primera imagen
      
      sonido.play();
    //loop lol
    sonido.loop();
    
    }else if (areaBoton(450, 380, 150, 50)) {
      estado = "creditos"; // Botón para volver a inicio desde el camino alterno
            
    } 

  }  else if (estado==="primera") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="segunda"; // Continúa al camino normal
      
      
    }
  } else if (estado==="segunda") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="tercera";
    }else if (areaBoton  ( 515, 25, 100, 50)) {
      estado = "tercera_alt";  // Va al camino alterno
     } 
  } else if (estado==="tercera") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="cuarta";
    }  
} else if (estado === "tercera_alt") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado = "inicio"; // Botón para volver a inicio desde el camino alterno
      sonido.stop();
    }
} else if (estado==="cuarta") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="quinta";
    } else if (areaBoton  ( 515, 25, 100, 50)) {
      estado = "quinta_alt";  // Va al camino alterno
    }
  } else if (estado==="quinta") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="sexta";
    }
} else if (estado === "quinta_alt") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado = "inicio"; // Botón para volver a inicio desde el camino alterno
      
            sonido.stop();
    }
} else if (estado==="sexta") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="septima";
   }else if (areaBoton  ( 515, 25, 100, 50)) {
      estado = "septima_alt";  // Va al camino alterno
   }
  } else if (estado==="septima") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="octava";
    }
} else if (estado === "septima_alt") {
    if (areaBoton(25, 25, 100, 50)) {
      estado = "inicio"; // Botón para volver a inicio desde el camino alterno
            sonido.stop();
    }
}
 else if (estado === "octava") {
    if (areaBoton(25, 25, 100, 50)) {
      estado = "juego";
    }
  } else if (estado === "juego") {
    if (areaBoton(25, 25, 100, 50)) {
      estado = "decima";
    }
  } else if (estado === "decima") {
    if (areaBoton(25, 25, 100, 50)) {
      estado = "onceava";
    }
  } else if (estado === "onceava") {
    if (areaBoton(25, 25, 100, 50)) {
      estado = "inicio"; // Vuelve al inicio
      sonido.stop();
    } 
  }
  if (estado === "creditos") {
    if (areaBoton(25, 25, 100, 50)) {
      
      estado = "inicio"; // Botón para volver a inicio desde el camino alterno
     
    }
}
}


function dibujarBoton (px,py,an,al){
 
 if (areaBoton(px,py,an,al)){
   fill(255,255,0);
}else { 
  fill(255,200,0);
}
rect(px,py,an,al,al/4);

}

function areaBoton(x,y,an,al){

  return mouseX > x &&  mouseX < x+an && mouseY > y && mouseY < y+al;
}

function cuadroTexto(){
  fill(255,255,0,150);
rect(0,370,640,200);
}
//(0,370,640,200,255,255,0,150)
function cargarTextos(texto,index,x,y,an,al,tam,col){
  fill(col);
 textSize(tam); 
 text(texto[index],x,y,an,al);
 
}
