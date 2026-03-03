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

    background(255);

    let fade = map(sin(frameCount * 0.02), -1, 1, 60, 180);

    stroke("#451426");
    
    push ();
    translate(width / 2, height / 2);

    rotate(frameCount * 0.005);

    fill(235, 157, 186, fade);

    for (let i = 0; i < 10; i++) {
      ellipse (0, 70, 80, 160);
      rotate(TWO_PI / 10);
    }

    pop();
    

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

