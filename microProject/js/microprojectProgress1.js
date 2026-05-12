//global variables
let button;
let canvas;
let startTime = 0;
let breathing = false;
let osc;
let osc2;


function setup() {
  canvas = createCanvas(1000, 1000);
  canvas.parent("sketch-holder");
  canvas.hide();

//Softer noise
  osc = new p5.Oscillator('sine'); 
  osc.freq(150);
  osc.start();
  osc.amp(0);

  osc2 = new p5.Oscillator('sine');
  osc2.freq(180 * 2.75);
  osc2.start();
  osc2.amp(0);

  button = createButton("breathe deep");
  button.parent("sketch-holder"); //for my css
  button.mousePressed(startBreathing);
}

//The breathing cycle
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


// Sound
   let freqPulse = map(breath, 0, 1, 110, 180);
   let vibrato = sin(frameCount * 0.04) * 0.8;
   osc.freq(freqPulse + vibrato);
   osc.amp(map(breath, 0, 1, 0.01, 0.07));

   osc2.freq((freqPulse + vibrato) * 2.75);     
   osc2.amp(map(breath, 0, 1, 0.005, 0.03));

   let fade = map(breath, 0, 1, 80, 200);



//Draws flower
   push();
   translate(width / 2, height / 2);

   rotate(frameCount * 0.002);

   fill(235, 157, 186, fade);

let petalSize = map(breath, 0, 1, 180, 300);
    for (let i = 0; i < 10; i++) {
      ellipse(0, 100, 120, petalSize);
      rotate(TWO_PI / 10);
    }

    pop();

    

//10 second timer
    if (millis() - startTime > 30000) {
      breathing = false;
      osc.amp(0, 2); 
      osc2.amp(0, 2);
      canvas.hide();
      button.show();
 
}

    }
  }



function startBreathing() {
  userStartAudio();

  breathing = true;
  startTime = millis();

  osc.amp(0.07, 2);
  osc2.amp(0.03, 2);

  canvas.show();
  button.hide();
  document.querySelector('h4').style.display = 'none';
}

