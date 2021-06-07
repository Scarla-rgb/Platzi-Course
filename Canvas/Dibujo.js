var texto = document.getElementById ("texto_lineas");
var boton = document.getElementById ("botoncito");
boton.addEventListener("click", dibujoPorClick);


var d = document.getElementById('dibujito');
var lienzo = d.getContext("2d");
var lineas = 30
var l = 0;
var yi, xf;

for (l ; l< lineas; l++) 
 	
{
	yi= 10 * l
	xf = 10 * (l + 1)
	dibujarLinea ("#DADADA", 150, 0, xf, 150)
	dibujarLinea ("#DADADA", 150, 300, xf, 150)
	dibujarLinea ("#DADADA", 150, 300, xf, 150)
	dibujarLinea ("#DADADA", 0, 150, 150, yi)
	dibujarLinea ("#DADADA", 300, 150, 150, yi)

	console.log ("linea" + l)
}

function dibujarLinea (color,xinicia,yinicial,xfinal,yfinal)

{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicia,yinicial);
lienzo.lineTo(xfinal,yfinal);
lienzo.stroke();
lienzo.closePath();
}

function dibujoPorClick ()

{
	var x = texto.value;
alert("no me toques ahi daddy")

}