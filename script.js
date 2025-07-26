const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drops = Array(200)
  .fill()
  .map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    l: Math.random() * 1,
    ys: 4 + Math.random() * 3,
  }));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  drops.forEach((d) => {
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x, d.y + d.l * d.ys);
  });
  ctx.stroke();
  move();
}

function move() {
  drops.forEach((d) => {
    d.y += d.ys;
    if (d.y > canvas.height) {
      d.y = -20;
      d.x = Math.random() * canvas.width;
    }
  });
}

setInterval(draw, 30);
