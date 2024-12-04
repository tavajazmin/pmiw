class Menu {
  constructor() {
    this.estado = "menu";
    this.creditos = "creditos";
    this.instruc = "instrucciones";
    this.jugar = "jugar";
    this.jugador = new Jugador(width / 2, height - 50, 30);
    this.cubosAzules = [];
    this.cubosAmarillos = [];
    this.puntaje = 0;
    this.numCubos = 5;
    this.contador = new Contador();
    this.crearCubos();
  }

  crearCubos() {
    for (let i = 0; i < this.numCubos; i++) {
      this.cubosAzules[i] = new Cubo(iAzul,random(0, width - 30), random(-200, -20), 30, color(0, 0, 255), -1);
      this.cubosAmarillos[i] = new Cubo(iAmarillo,random(0, width - 30), random(-200, -20), 30, color(255, 255, 0), 1);
    }
  }

  reiniciar() {
    this.jugador = new Jugador(width / 2, height - 50, 30);
    this.cubosAzules = [];
    this.cubosAmarillos = [];
    this.puntaje = 0;
    this.contador = new Contador();
    this.crearCubos();
    this.estado = "menu";
   
  }

  actualizar() {
    background(200);
    image(iFondo, 0, 0, width, height);
    this.jugador.mover();
    this.jugador.mostrar();
    
    this.contador.actualizar();
    this.contador.mostrar();

if (this.puntaje >= 10) {
  this.estado = "ganaste";
}

    if (this.contador.tiempoFinalizado()) {
      this.verificarResultado();
      return; // Termina la función actualizar
    }
//AZULES
    for (let i = 0; i < this.cubosAzules.length; i++) {
      this.cubosAzules[i].mover();
      this.cubosAzules[i].mostrar();
      if (this.cubosAzules[i].checarColision(this.jugador)) {
        this.puntaje += this.cubosAzules[i].valor;
        this.cubosAzules[i].reposicionar();
      }
    }
//AMARILLO
    for (let i = 0; i < this.cubosAmarillos.length; i++) {
      this.cubosAmarillos[i].mover();
      this.cubosAmarillos[i].mostrar();
      if (this.cubosAmarillos[i].checarColision(this.jugador)) {
        this.puntaje += this.cubosAmarillos[i].valor;
        this.cubosAmarillos[i].reposicionar();
      }
    }

    this.mostrarPuntaje();
  }

  mostrarPuntaje() {
    textSize(32);
    fill(255);
    textAlign(LEFT, CENTER);
    text("flores: " + this.puntaje, 20, 50);
  }

  verificarResultado() {
    if (this.puntaje >= 10) {
            this.estado = "ganaste";

      background(0, 150, 0);
      fill(0);
      textSize(48);
      textAlign(CENTER, CENTER);
      text('¡Ganaste!', width / 2, height / 2);
      fill(0, 255, 0);
      rect(180, 350, 280, 50);
      fill(0);
      textSize(40);
      text("Volver al menú", width / 2, height - 100);
      sonido.stop();
    } else {
       this.estado = "perdiste";
      background(150, 0, 0);
      fill(0);
      textSize(48);
      textAlign(CENTER, CENTER);
      text('Perdiste', width / 2, height / 2);
      fill(0, 255, 0);
      rect(180, 350, 280, 50);
      fill(0);
      textSize(40);
      text("Volver al menú", width / 2, height - 100);
      sonido.stop();
     
    }
  }
  
   teclapresionada(keyCode) {
    this.jugador.teclapresionada(keyCode);
  }

  teclapresionLiberada(keyCode) {
    this.jugador.teclapresionLiberada(keyCode);
  }
  

  mostrar() {
    if (this.estado === "menu") {
      this.principal();
    } else if (this.estado === "creditos") {
      this.credit();
    } else if (this.estado === "instrucciones") {
      this.instr();
    } else if (this.estado === "jugar") {
      this.actualizar();
    } else if (this.estado === "ganaste" || this.estado === "perdiste") {
      this.verificarResultado();
    }
  }

  principal() {
    image(iMenu, 0, 0, width, height);
    fill(255, 255, 0, 150);
    rect(20, 20, 600, 400);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("Una Flor Amarilla", width / 2, 100);
    fill(0, 255, 0);
    rect(250, 180, 150, 40);
    rect(250, 280, 150, 40);
    fill(0);
    text("Creditos", width / 2, 200);
    text("Jugar", width / 2, 300);
  }

  credit() {
    image(iCreditos, 0, 0, width, height);
    fill(255, 255, 0, 150);
    rect(20, 20, 600, 400);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("Creditos", width / 2, 50);
    text("Juego creado por: \n Jazmin Tava y Bruno Diaz", width / 2, 200);
    fill(0, 255, 0);
    rect(180, 350, 280, 50);
    fill(0);
    text("Volver al menú", width / 2, height - 100);
  }

  instr() {
    image(iMenu, 0, 0, width, height);
    fill(255, 255, 0, 150);
    rect(20, 20, 600, 400);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(25);
    text("Instrucciones", width / 2, 100);
    text("muevete con las flechas" ,width / 2, 150);
    text("\nagarra 10 flores amarillas \n  antes de  que se acabe el tiempo", width / 2, 200);
    text("Evita las flores Azules", width / 2, 300);
    fill(0, 255, 0);
    rect(180, 350, 280, 50);
    fill(0);
    text("Toca para comenzar", width / 2, height - 100);
  }






  cambiar() {
    if (this.estado === "menu") {
      if (mouseX > 250 && mouseX < 400 && mouseY > 180 && mouseY < 220) {
        this.estado = "creditos";
      } else if (mouseX > 250 && mouseX < 400 && mouseY > 280 && mouseY < 320) {
        this.estado = "instrucciones";
      }
    } else if (this.estado === "creditos") {
      if (mouseX > 180 && mouseX < 460 && mouseY > 350 && mouseY < 400) {
        this.estado = "menu";
      }
    } else if (this.estado === "instrucciones") {
      if (mouseX > 180 && mouseX < 460 && mouseY > 350 && mouseY < 400) {
        this.estado = "jugar";
        sonido.play();
        sonido.loop();
      }
    } else if (this.estado === "ganaste" || this.estado === "perdiste") {
      if (mouseX > 180 && mouseX < 460 && mouseY > 350 && mouseY < 400) {
        this.reiniciar(); 
        return; 
      }
    }
  }
}
