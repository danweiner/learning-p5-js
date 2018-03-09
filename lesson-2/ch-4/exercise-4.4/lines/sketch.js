var lineX;
var lineY;

function setup() { 
  createCanvas(400, 400);
  smooth();
  lineX = width/2;
  lineY = height/2;
  
} 

function draw() { 
 	background(255);
  
  stroke(0);
 
  line(lineX, 0 * lineY, lineX, lineY);
  line(0 * lineX, 2 * lineY, lineX, lineY);
  line(2 * lineX, 2 * lineY, lineX, lineY);
  
  
}