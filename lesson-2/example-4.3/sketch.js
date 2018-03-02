//Circle grows in size
var circleSize = 0;

function setup() { 
  createCanvas(400, 640);
  
  
} 

function draw() { 
  
  background(255);
  ellipseMode(CENTER);
  
  stroke(0);
  fill(255);
  
  ellipse(mouseX, mouseY, circleSize, circleSize);
  
  //circle growth varies with speed of horizontal
  //mouse move
  circleSize = circleSize + abs(pmouseX - mouseX);
}