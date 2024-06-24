const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

let range = 20 * 2; // 20 px * 2

function shadow(e) {
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const { offsetWidth: width, offsetHeight: height } = hero;

  const xRange = Math.round((x / width * range) - range / 2);
  const yRange = Math.round((y / height * range) - range / 2);
  
  // Invert the xRange and yRange values
  const invertedXRange = -xRange;
  const invertedYRange = -yRange;

  text.style.textShadow = `${invertedXRange}px ${invertedYRange}px 0 rgba(224,224,224,0.7)`;
}

hero.addEventListener('mousemove', shadow);
