
const splashIconAnim = (iconId, dir) => {
  let icon = document.getElementById(iconId);
  let angle = 0;
  let inc = dir * 0.025;
  let id = setInterval(frame, 50);
  let x, y;
  let phase = Math.random() * 2 * Math.PI;
  function frame() {
    x = 20 * Math.cos(angle + phase);
    y = 20 * Math.sin(angle + phase);
    icon.style.transform = `translate(${x}px, ${y}px)`;
    angle += inc;
  }

}

export default splashIconAnim;

