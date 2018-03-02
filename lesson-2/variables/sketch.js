var circleX = 0;
//can't use height before setup
var circleY;

function setup() { 
  createCanvas(400, 640);
  circleY = height/2
  
} 

function draw() { 
  //draw the daytime sky
  background(255);
  ellipseMode(CENTER);
  
  stroke(0);
  fill(255);
  
  ellipse(circleX, circleY, 50, 50);
  circleX += 1;
}