let button;
let canvasCreated = false;

function setup() {
  
  // Create a button and set its value to 0.
  // Place the button beneath the canvas.
  button = createButton('breathe deep');
  button.mousePressed(showCanvas);
}

function draw() {
  if (!canvasCreated) {
  background(200);
  circle(250, 250, 200);
  }

}


  function showCanvas() {
    if (!canvasCreated) {
     createCanvas(500, 500);
     canvasCreated = true;
    }
  
}

