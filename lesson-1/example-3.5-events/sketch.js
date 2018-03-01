function setup() { 
  createCanvas(400, 640);
  //background moved from draw to setup
  background(255);
  smooth();
} 

function draw() {
  //nothing happens in draw!
  //the window will remain blanks
  
  //this fails because the rect is
  //immediately drawn over
  // background(255);
}

function mousePressed() {
  stroke(0);
  fill(175);
  rectMode(CENTER);
  rect(mouseX, mouseY, 16, 16);
}

function keyPressed() {
	background(255);
}