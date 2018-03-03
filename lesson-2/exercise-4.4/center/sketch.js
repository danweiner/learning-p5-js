var center = 200;
var squareW = 350;
var ellipseD = 150;

var rectFill = 175;

function setup() { 
  createCanvas(400, 400);
  smooth();
  
} 

function draw() { 
 	background(255);
  
  rectMode(CENTER);
  stroke(0);
  fill(rectFill);
  rect(center, center, squareW, squareW);
  
  fill(255);
  ellipse(center, center, ellipseD, ellipseD);
  
  rectFill = rectFill + 1;
  
}