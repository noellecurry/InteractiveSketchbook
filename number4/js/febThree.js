let steps=0;
let maxSteps = 10;


function setup () {
    createCanvas(600, 200);
    strokeWeight(4);
    

}




function draw (){
    background(220);

    stroke(0, 102);
    line(mouseX, mouseY, pmouseX, pmouseY);

let sectionWidth = width / maxSteps

//sections

noStroke();
fill("#00ff00")
for(let i =0; i <steps; i++){
    rect(i * sectionWidth, 0, sectionWidth, height);
}

if (steps>= maxSteps) {
    textSize(16);
    fill(0);
    text("State: Complete", width -150, height -20);
}
}

function mousePressed() {
    if (steps <maxSteps) {
        steps += 1;
    }

}
