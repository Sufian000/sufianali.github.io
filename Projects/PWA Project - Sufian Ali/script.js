async function fetchInventors() {
  const response = await fetch('data.json');
  const data = await response.json();
  const container = document.getElementById('inventorList');

  data.inventors.forEach(inv => {
    const card = document.createElement('div');
    card.className = 'inventor-card';

    const html = \`
      <h2>\${inv.name}</h2>
      <p><strong>Invention:</strong> \${inv.invention}</p>
      <p>\${inv.description}</p>
      <img src="\${inv.image}" alt="\${inv.name}">
      <button onclick="new Audio('\${inv.audio}').play()">Play Audio</button>
    \`;

    card.innerHTML = html;
    container.appendChild(card);
  });
}

function animateCanvas() {
  const canvas = document.getElementById('backgroundCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let hue = 0;
  function draw() {
    hue += 0.5;
    ctx.fillStyle = 'hsla(' + hue + ', 100%, 10%, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(draw);
  }
  draw();
}

window.onload = () => {
  fetchInventors();
  animateCanvas();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('SW registered', reg))
      .catch(err => console.error('SW registration failed', err));
  }
};