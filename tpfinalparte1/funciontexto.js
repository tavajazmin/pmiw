function cargarTextos(texto, index, x, y, an, al, tam, col) {
  fill(255, 255, 0, 150);
  rect(0, y, an, al);
  fill(col);
  textSize(tam);
  text(texto[index], x, y, 640, al);
}
function textOp(texto, index, x) {
  fill(0);
  textSize(15);
  text(texto[index], x, 26, 100, 70);
}
//boton bien 30,
//boton otra op 520
