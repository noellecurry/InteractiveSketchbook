let button;
let canvas;
let startTime = 0;
let breathing = false;

function setup() {
  canvas = createCanvas(500, 500);
  canvas.hide(); // start hidden

  button = createButton("breathe deep");
  button.mousePressed(startBreathing);
}

function draw() {
  if (breathing) {

    noStroke();
    fill("#eed0db");
    circle(width / 2, height / 2, 200);

    // after 20 seconds
    if (millis() - startTime > 10000) {
      breathing = false;
      canvas.hide();
      button.show();
    }
  }
}

function startBreathing() {
  console.log("button clicked"); // check console

  breathing = true;
  startTime = millis();

  canvas.show();
  button.hide();
}

