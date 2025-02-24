// Obtener el elemento canvas del DOM por su ID
let canvas = document.getElementById("canvas");

// Obtener el contexto de dibujo 2D del canvas para poder dibujar en él
let ctx = canvas.getContext("2d");

// Establecer el color de relleno utilizando valores RGB
// En este caso, el color será un tono de azul: rgb(0, 0, 255)
ctx.fillStyle = "rgb(13, 150, 192)";


// Dibujar un rectángulo relleno en el canvas
// El primer valor (50) es la posición horizontal (X) del vértice superior izquierdo del rectángulo
// El segundo valor (60) es la posición vertical (Y) del vértice superior izquierdo del rectángulo
// El tercer valor (150) es el ancho del rectángulo
// El cuarto valor (150) es la altura del rectángulo
ctx.fillRect(50, 60, 150, 150);
