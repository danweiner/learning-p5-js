var circleX = 0;
var circleY = 0;
var circleW = 50;
var circleH = 100;
var circleStroke = 255;
var circleFill = 0;
var backgroundColor = 255;
var change = 0.5;

function setup() { 
  createCanvas(400, 640);
  smooth();
  
} 

function draw() { 
  background(backgroundColor);
  stroke(circleStroke);
  fill(circleFill);
  
  ellipse(circleX, circleY, circleW, circleH);
  
  // Change the values of all the vars
  
  circleX = circleX + change;
  circleY = circleY + change;
  circleW = circleW + change;
  circleH = circleH - change;
  circleStroke = circleStroke - change;
  circleFill = circleFill + change;
  
  // this does a very funky effect where the black
  // tall thin oval becomes wider then disappears 
  // and flattens before reappearing and becoming 
  // a larger and more circular, gradually whitening
  // object 
  
}