function drawRectangle() {
    let canvas = document.getElementById("canvas1");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(1, 38, 49)";
    ctx.fillRect(50, 60, 150, 150);
}

function drawLine() {
    let canvas = document.getElementById("canvas2");
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(250, 250);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.stroke();
}

function drawCircle() {
    let canvas = document.getElementById("canvas3");
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(150, 150, 70, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
}

document.addEventListener("DOMContentLoaded", () => {
    drawRectangle();
    drawLine();
    drawCircle();
});
