var circleX;
var circleY;

function setup() { 
  createCanvas(400, 400);
  smooth();
  circleX = width/4;
  circleY = height/4;
} 

function draw() { 
 	background(255);
  ellipseMode(CENTER);
  
  stroke(0);
  fill(155);
  ellipse(circleX, circleY, 100, 100);
  ellipse(circleX, 3*circleY, 100, 100);
  ellipse(3*circleX, 3*circleY, 100, 100);
  ellipse(3*circleX, circleY, 100, 100);
  
  circleX = circleX + 1;
}