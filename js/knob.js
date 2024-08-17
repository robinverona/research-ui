const knob = document.querySelector(".knob");
const cursor = document.querySelector(".cursor");


function mouseAngle(e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let w = window.innerWidth/2;
    let h= window.innerHeight/2;
    let angle= (Math.atan2(h - mouseY, w - mouseX) * 180 / Math.PI) -90;
    knob.style.transform = `rotate(${angle}deg)`;
  }

  document.addEventListener("mousemove", mouseAngle, false);

  
  knob.addEventListener("onmousedown", () => {
    console.log("START");
    document.addEventListener("mousemove", mouseAngle, false);
  });
  

  knob.addEventListener("onmouseup", () => {
    console.log("STOP");
  });