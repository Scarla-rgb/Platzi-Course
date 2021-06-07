var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  }

  document.addEventListener("keydown", dibujarTeclado);
  var cuadradito = document.getElementById('area_de_dibujo');
  var lienzo = cuadradito.getContext('2d');
  var x = 150, y = 150; 
  var colorInicial = "red";
  var colorParedes = "skyblue";
  var colorcito = "#FAA";
  

  dibujarLinea(colorInicial, x - 1, y - 1, x + 1, y + 1);
  dibujarLinea("skyblue", 0, 0, 0, 300); 
  dibujarLinea("skyblue", 300, 0, 300, 300); 
  dibujarLinea("skyblue", 0, 0, 300, 0); 
  dibujarLinea("skyblue", 0, 300, 300, 300); 
  
  
  
  function dibujarTeclado(evento) {
    var movimiento = 10;
  
    switch (evento.keyCode) {
      case teclas.UP:
        if (y > 0) {
          dibujarLinea(colorcito, x, y, x, y - movimiento);
          y = y - movimiento;
        }
      break;
      case teclas.DOWN:
        if (y < 300) {
          dibujarLinea(colorcito, x, y, x, y + movimiento);
          y = y + movimiento;
        }
      break;
      case teclas.LEFT:
        if (x > 0) {
          dibujarLinea(colorcito, x, y, x - movimiento, y);
          x = x - movimiento;
        }
      break;
      case teclas.RIGHT:
        if(x < 300) {
          dibujarLinea(colorcito, x, y, x + movimiento, y);
          x = x + movimiento;
        }
      break;
    }
  }
  
  function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3; 
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
  }