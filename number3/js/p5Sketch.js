function setup (){
    createCanvas(600, 400);

    background(255, 255, 120);

}

function draw() {
    //direct manipulation

    //ellipse(mouseX, mouseY, 60);

    //Constraint

    stroke(180, 220, 255);
    strokeWeight(3);

    fill(80, 180, 100);

    let x = constrain(mouseX, 100, 500);


    rect(x, 200, 50, 50);

}