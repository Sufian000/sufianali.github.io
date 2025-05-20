
const canvas = document.getElementById('safariCanvas');
const ctx = canvas.getContext('2d');

// Set canvas to fill window
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  if (imagesLoaded === totalImages) {
    drawScene();
  }
}
window.addEventListener('resize', resizeCanvas);

// Load images
const background = new Image();
background.src = 'images/background.jpg';

const foreground1 = new Image();
foreground1.src = 'images/foreground1.png';

const foreground2 = new Image();
foreground2.src = 'images/foreground2.png';

let imagesLoaded = 0;
const totalImages = 3;

function drawScene() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  const fg1Width = canvas.width * 0.25;
  const fg1Height = canvas.height * 0.4;
  ctx.drawImage(foreground1, canvas.width * 0.1, canvas.height * 0.6, fg1Width, fg1Height);

  const fg2Width = canvas.width * 0.22;
  const fg2Height = canvas.height * 0.4;
  ctx.drawImage(foreground2, canvas.width * 0.65, canvas.height * 0.6, fg2Width, fg2Height);

  // Text
  ctx.font = `${canvas.width * 0.04}px Arial`;
  ctx.fillStyle = "white";
  ctx.fillText("Sunset Safari", canvas.width * 0.03, canvas.height * 0.1);

  ctx.font = `${canvas.width * 0.025}px Arial`;
  ctx.fillStyle = "lightgray";
  ctx.fillText("Sufian Ali", canvas.width * 0.03, canvas.height * 0.16);
}

[background, foreground1, foreground2].forEach(img => {
  img.onload = () => {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
      resizeCanvas();
    }
  };
});
