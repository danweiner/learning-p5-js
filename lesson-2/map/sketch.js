var circleX = 0;

var circleY;

var col;

var canWidth = 400;

function setup() { 
 	createCanvas(canWidth, 640);
 	circleY = height/2
 	// this works if col is called in setup or draw but 
 	// Dan placed it in draw
  	//col = map(mouseX, 0, canWidth, 0, 255);
} 

function draw() { 
	

	// change background from black to white as mouse moves from
	// left to right side of the screen
	col = map(mouseX, 0, canWidth, 0, 255);
 	background(col);
 	ellipseMode(CENTER);
  
 	stroke(0);
 	fill(255);
  
 	ellipse(circleX, circleY, 50, 50);
 	circleX += 1;
}