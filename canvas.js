let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");



let x = 800;
let y = 400;
let w = 50;
let h = 50;

let dx = 3;
let dy = 3;





function animate () {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)
    c.beginPath();
    c.fillStyle = "black";
    c.fillRect(x, y, w, h);

    if (x + 50 > innerWidth || x  < 0) {
        dx = -dx;
    }
    if (y + 50 > innerHeight || y < 0) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}


animate();