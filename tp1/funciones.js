
function optico(zero, max, veinte){
  
  for ( i = 20; i < 38; i++) {
    for (  j =0; j < 21; j++) {
      
fill (blanco);
     distan =dist(mouseX,mouseY , i*tami, j*tami);
       
     diagonal =dist (zero, zero, max, zero);
      
     rango = map (distan, zero, diagonal, zero,veinte);
   
        ellipse(i*tami, j*tami, rango, rango);
      }
    }
  }
  
  //no retorna valor
function botones( maxx,  zeroo,  otro, x,  y,  ancho,  largo){
  
  //boton b
  
    fill(maxx,otro,zeroo);
  rect (x,x,ancho,largo);
  
 //boton a
  
  fill (zeroo,maxx,otro);
  rect (x,y,ancho,largo);
}


function mousePressed(){
  
 if (mouseX>= 350 && mouseX < 350+100 && mouseY >350  && mouseY< 350+40 ){
  blanco = ('rgb(255,200,0)');
 }else if ( mouseX>=350  && mouseX <350+100  && mouseY>10  && mouseY< 10+40){
  blanco  = ('rgb(0,255,200)');
 }else if (ninja== true )ninja = false;  
 else ninja = true;
 
}

function keyPressed (){
 if(key == 'r'){
 mouseX = 600;
 mouseY = 200;
   blanco = (255);
 }
}
// retorna valor
 function tamano ( cant, cin){
   total = cin/cant;
  
  return total;
}
