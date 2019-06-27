
function myMove(element) {
  let ele = document.getElementById(element)
  let pos = 0;
  let id = setInterval(frame, 100);

  function frame() {
      pos++
      ele.style.transform = `rotate(${pos}deg)`;
  }

}

export default myMove;