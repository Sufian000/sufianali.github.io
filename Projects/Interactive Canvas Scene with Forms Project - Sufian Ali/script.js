const bgPaths = ['images/bg1.jpg','images/bg2.jpg','images/bg3.jpg'];
const itemPaths = ['images/item1.png','images/item2.png','images/item3.png'];
const charPath = 'images/character.png';
const sfxPaths = ['audio/sfx1.mp3','audio/sfx2.mp3','audio/sfx3.mp3'];

let bgIndex = 0, charX = 200, charY = 200, vertical = false;
const itemsOn = [false, false, false];

const canvas = document.getElementById('sceneCanvas');
const ctx = canvas.getContext('2d');

const radios = document.querySelectorAll('input[name="bg"]');
const slider = document.getElementById('posSlider');
const axisToggle = document.getElementById('axisToggle');
const itemCbs = [1,2,3].map(i => document.getElementById('item'+i));
const sfxBtns = [1,2,3].map(i => document.getElementById('sfx'+i));

const bgImages = bgPaths.map(path => { let img = new Image(); img.src = path; return img; });
const itemImages = itemPaths.map(path => { let img = new Image(); img.src = path; return img; });
const charImg = new Image(); charImg.src = charPath;
const sfxAudio = sfxPaths.map(path => new Audio(path));

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bgImages[bgIndex], 0, 0, canvas.width, canvas.height);
  itemsOn.forEach((on, i) => {
    if (on) ctx.drawImage(itemImages[i], 60 + i*220, 370, 90, 90);
  });
  ctx.drawImage(charImg, charX, charY, 110, 110);
}

radios.forEach(r => r.onchange = e => { bgIndex = +e.target.value; drawScene(); });
axisToggle.onchange = () => { vertical = axisToggle.checked; slider.value = vertical ? charY : charX; };
slider.oninput = () => { vertical ? charY = +slider.value : charX = +slider.value; drawScene(); };
itemCbs.forEach((cb, i) => cb.onchange = () => { itemsOn[i] = cb.checked; drawScene(); });
sfxBtns.forEach((btn, i) => btn.onclick = () => { sfxAudio[i].currentTime = 0; sfxAudio[i].play(); });

let toLoad = bgImages.length + itemImages.length + 1;
const checkLoad = () => { if (--toLoad === 0) drawScene(); };
bgImages.forEach(img => img.onload = checkLoad);
itemImages.forEach(img => img.onload = checkLoad);
charImg.onload = checkLoad;
