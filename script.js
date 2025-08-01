// Setup canvas
const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize canvas on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// 🌧️ Raindrop particles
const rainDrops = [];
for (let i = 0; i < 200; i++) {
  rainDrops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10,
    speed: Math.random() * 4 + 2,
    opacity: Math.random() * 0.5 + 0.3,
  });
}

// 💖 Floating hearts
const hearts = [];
for (let i = 0; i < 50; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 12 + 8,
    speed: Math.random() * 1.5 + 0.5,
  });
}

// 🎨 Draw everything
function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw rain
  ctx.strokeStyle = "rgba(255,255,255,0.3)";
  ctx.lineWidth = 1.5;
  rainDrops.forEach((drop) => {
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
    ctx.stroke();

    drop.y += drop.speed;
    if (drop.y > canvas.height) {
      drop.y = -20;
      drop.x = Math.random() * canvas.width;
    }
  });

  // Draw hearts
  hearts.forEach((h) => {
    ctx.font = `${h.size}px Arial`;
    ctx.fillStyle = "rgba(255,105,180,0.7)";
    ctx.fillText("♥", h.x, h.y);

    h.y -= h.speed;
    if (h.y < -20) {
      h.y = canvas.height + 20;
      h.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawScene);
}

drawScene();

