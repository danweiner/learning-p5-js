// var circleX = 0;
// var circleY = 0;
// var circleW = 50;
// var circleH = 100;
// var circleStroke = 255;
// var circleFill = 0;
var backgroundColor = 255;
var change = 0.5;

var circle = {
	x: 0,
	y: 0,
	w: 50,
	h: 100,
	stroke: 255,
	fill: 0
};

function setup() { 
  createCanvas(400, 640);
  smooth();
  
} 

function draw() { 
  background(backgroundColor);
  stroke(circle.stroke);
  fill(circle.fill);
  
  ellipse(circle.x, circle.y, circle.w, circle.h);
  
  // Change the values of all the vars
  
  circle.x = circle.x + change;
  circle.y = circle.y + change;
  circle.w = circle.w + change;
  circle.h = circle.h - change;
  circle.stroke = circle.stroke - change;
  circle.fill = circle.fill + change;
  
  // this does a very funky effect where the black
  // tall thin oval becomes wider then disappears 
  // and flattens before reappearing and becoming 
  // a larger and more circular, gradually whitening
  // object 
  
}