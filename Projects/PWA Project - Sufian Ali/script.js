
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

    ctx.save();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    for (let i = 0; i < 10; i++) {
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();

    requestAnimationFrame(draw);
  }
  draw();
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const installBtn = document.createElement('button');
  installBtn.innerText = 'Install App';
  installBtn.style = 'position:fixed;bottom:1rem;right:1rem;padding:0.75rem;background:#00c3ff;color:#fff;border:none;border-radius:8px;';
  installBtn.onclick = () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') console.log('App installed');
      deferredPrompt = null;
    });
  };
  document.body.appendChild(installBtn);
});

window.onload = () => {
  animateCanvas();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('SW registered', reg))
      .catch(err => console.error('SW registration failed', err));
  }
};
