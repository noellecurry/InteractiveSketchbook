//global variables
let button;
let canvas;
let startTime = 0;
let breathing = false;
let osc;


function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent("sketch-holder");
  canvas.hide();

  osc = new p5.Oscillator('triangle'); // change wave type
  osc.freq(150);
  osc.start();
  osc.amp(0);

  button = createButton("breathe deep");
  button.mousePressed(startBreathing);
}

function draw() {
  if (breathing) {

    background(255);

    let cycleLength = 6000;
    let t = (millis() - startTime) % cycleLength;

    let breath;

    if (t < 2000) {
      breath = map(t, 0, 2000, 0, 1);
    } 
    else if (t < 3000) {
      breath = 1;
    } 
    else {
      breath = map(t, 3000, 6000, 1, 0);
    }
    
   let freqPulse = map(breath, 0, 1, 90, 150);
   let vibrato = sin(frameCount * 0.08) * 1.5;
   osc.freq(freqPulse + vibrato);
   osc.amp(map(breath, 0, 1, 0.03, 0.15));

   let fade = map(breath, 0, 1, 80, 200);

   stroke("#451426");

   push();
   translate(width / 2, height / 2);

   rotate(frameCount * 0.002);

   fill(235, 157, 186, fade);


// draws flower

let petalSize = map(breath, 0, 1, 120, 200);
    for (let i = 0; i < 10; i++) {
      ellipse(0, 70, 80, petalSize);
      rotate(TWO_PI / 10);
    }

    pop();

    

//10 second timer
    if (millis() - startTime > 10000) {
      breathing = false;
      osc.amp(0, 2);   // fade out over 2 seconds
      canvas.hide();
      button.show();

    }
  }
}


function startBreathing() {
  userStartAudio();

  breathing = true;
  startTime = millis();

  osc.amp(0.15, 2);

  canvas.show();
  button.hide();
}

