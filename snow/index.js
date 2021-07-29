/**
 * Pick random x to y.
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function random(x, y) {
  return Math.random() * (x - y) + y;
}

setInterval(() => {
  const snow = document.createElement('div');
  let t = 0;
  const speed = random(3, 5);
  let l = random(0, window.innerWidth + 100);
  snow.style.setProperty('--size', `${random(5, 20)}px`);
  snow.style.setProperty('--top', `${t}px`);
  snow.style.setProperty('--left', `${l}px`);
  snow.classList.add('snow');
  setInterval(() => {
    if (t > window.innerHeight || l < 0) {
      snow.remove();
    }
    snow.style.setProperty('--top', `${t}px`);
    snow.style.setProperty('--left', `${l}px`);
    l += -0.5;
    t += speed;
  }, 1000 / 60);
  document.body.append(snow);
}, 1000 / 30);
