//Jazmin Tava
//Bruno Diaz
//comision 1

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
    textSize(30);
    push();
    fill(255);
    text("Una flor Amarilla", 240, 10, 250, 200);
    pop();
    dibujarBoton(450, 380, 150, 50); // Botón de creditos
    fill(0);
    text("Empezar", 250, 390, 200, 200);
    text("Creditos", 460, 390, 200, 200);
  } else if (estado==="primera") {
    cargarFotos(fotos, 1, 0, 0);
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a segunda
    cargarTextos(textos, 2, 5, 390, 640, 150, 20, 0);
    textOp(textos, 21, 30); //CONTINUAR
  } else if (estado==="segunda") {
    cargarFotos(fotos, 2, 0, 0);
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a tercera
    dibujarBoton  ( 515, 25, 100, 50); // botón para ir a tercera_alt


    cargarTextos(textos, 3, 5, 390, 640, 150, 20, 0); // texto de la historia
    textOp(textos, 4, 30); //texto del boton tercero
    textOp(textos, 5, 519); //texto del alterno
  } else if (estado==="tercera") {
    cargarFotos(fotos, 3, 0, 0);
    dibujarBoton(  25, 25, 100, 50);   //Botón para ir a quinta
    cargarTextos(textos, 6, 5, 390, 640, 150, 20, 0);
    textOp(textos, 21, 30); //CONTINUAR
  } else if (estado === "tercera_alt") {
    cargarFotos(fotos, 4, 0, 0); // Imagen del camino alterno
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a inicio
    textOp(textos, 19, 30); //VOLVER AL MENU
    cargarTextos(textos, 18, 5, 390, 640, 150, 20, 0); //texto historia
  } else if (estado==="cuarta") {
    cargarFotos(fotos, 5, 0, 0);
    dibujarBoton(  25, 25, 100, 50);  //Botón para ir a quinta
    dibujarBoton  ( 515, 25, 100, 50); // botón para ir a quinta_alt

    cargarTextos(textos, 7, 5, 375, 650, 150, 20, 0); //texto historia
    textOp(textos, 9, 27); //texto caminoalterno
    textOp(textos, 8, 520); //texto del normal
  } else if (estado==="quinta") {
    cargarFotos(fotos, 6, 0, 0);
    dibujarBoton( 25, 25, 100, 50); //Botón para ir a sexta

    cargarTextos(textos, 10, 5, 375, 650, 150, 18, 0); //texto historia
    textOp(textos, 21, 30); //CONTINUAR
  } else if (estado === "quinta_alt") {
    cargarFotos(fotos, 7, 0, 0); // Imagen del camino alterno
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a inicio

    textOp(textos, 19, 30); //VOLVER AL MENU
    cargarTextos(textos, 23, 5, 375, 650, 150, 19, 0); //texto historia
  } else if (estado==="sexta") {
    cargarFotos(fotos, 8, 0, 0);
    dibujarBoton(  25, 25, 100, 50);  //Botón para ir a septima
    dibujarBoton  ( 515, 25, 100, 50); // botón para ir a septima_alt
    cargarTextos(textos, 11, 5, 375, 650, 150, 20, 0); //texto historia
    textOp(textos, 12, 27); //texto camino normal
    textOp(textos, 13, 530); //texto del alterno
  } else if (estado==="septima") {
    cargarFotos(fotos, 9, 0, 0);
    dibujarBoton(  25, 25, 100, 50);  //Botón para ir a octava

    cargarTextos(textos, 14, 5, 375, 650, 150, 20, 0); //texto historia
    textOp(textos, 21, 30); //CONTINUAR
  } else if (estado === "septima_alt") {
    cargarFotos(fotos, 10, 0, 0); // Imagen del camino alterno
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a inicio

    cargarTextos(textos, 24, 5, 375, 650, 150, 20, 0); //texto historia
    textOp(textos, 19, 30); //VOLVER AL MENU
  } else if (estado==="octava") {
    cargarFotos(fotos, 11, 0, 0);
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a juego

    cargarTextos(textos, 15, 5, 375, 650, 150, 20, 0); //texto historia
    textOp(textos, 21, 30); //CONTINUAR
  }
  if (estado==="juego") {
    cargarFotos(fotos, 12, 0, 0);
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a decima

    fill(255);
    textSize(20);
    push();
    textAlign(CENTER);
    text("Juego de recolectar flores", 240, 10, 200, 200);
    pop();
    textOp(textos, 21, 30); //CONTINUAR
  }
  if (estado==="decima") {
    cargarFotos(fotos, 13, 0, 0);
    dibujarBoton(  25, 25, 100, 50); // Botón para ir a final

    cargarTextos(textos, 17, 5, 375, 650, 150, 20, 0); //texto historia
    textOp(textos, 21, 30); //CONTINUAR
  }
  if (estado==="onceava") {
    cargarFotos(fotos, 14, 0, 0, 640, 480);

    dibujarBoton(25, 25, 100, 50);

    cargarTextos(textos, 18, 5, 375, 650, 150, 20, 0); //texto historia
    textOp(textos, 22, 30); //CONTINUAR
  }
  if (estado==="creditos") {
    cargarFotos(fotos, 15, 0, 0);

    dibujarBoton(25, 25, 100, 50);
    push();
    fill(255, 255, 0, 150);
    rect(0, 80, 640, 400);

    pop();
    textSize(30);
    fill(0);
    text("Una Flor amarilla de Julio Cortazar \n Tp realizado por:\n Jazmin Tava \n Bruno Diaz ", 70, 150, 650, 150);
    textOp(textos, 19, 30); //VOLVER AL MENU
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
    } else if (areaBoton(450, 380, 150, 50)) {
      estado = "creditos"; // Botón para volver a inicio desde el camino alterno
    }
  } else if (estado==="primera") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="segunda"; // Continúa al camino normal
    }
  } else if (estado==="segunda") {
    if (areaBoton(  25, 25, 100, 50)) {
      estado="tercera";
    } else if (areaBoton  ( 515, 25, 100, 50)) {
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
    } else if (areaBoton  ( 515, 25, 100, 50)) {
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
  } else if (estado === "octava") {
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


function dibujarBoton (px, py, an, al) {

  if (areaBoton(px, py, an, al)) {
    fill(255, 255, 0);
  } else {
    fill(255, 200, 0);
  }
  rect(px, py, an, al, al/4);
}

function areaBoton(x, y, an, al) {

  return mouseX > x &&  mouseX < x+an && mouseY > y && mouseY < y+al;
}

//(0,370,640,200,255,255,0,150)
