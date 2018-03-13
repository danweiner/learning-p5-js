// Start all rects except one as white
var bright0 = 255;
var bright1 = 255;
var bright2 = 255;
var bright3 = 255;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(255);

	// Depending on mouse location, different rect set
	// to brightness 0

	if (mouseX < width/2 && mouseY < height/2) {
		bright0 = 0;
	} else if (mouseX > width/2 && mouseY < height/2) {
		bright1 = 0;
	} else if (mouseX < width/2 && mouseY > height/2) {
		bright2 = 0;
	} else {
		bright3 = 0;
	}

	  // All rectangles always fade to white
  	bright0 = bright0 + 1;
  	bright1 = bright1 + 1;
  	bright2 = bright2 + 1;
  	bright3 = bright3 + 1;

	bright0 = constrain(bright0, 0, 255);
	bright1 = constrain(bright1, 0, 255);
	bright2 = constrain(bright2, 0, 255);
	bright3 = constrain(bright3, 0, 255);

	// Fill color and draw each rectangle
	noStroke(); 
	fill(bright0);
	rect(0,0,width/2,height/2); 
	fill(bright1);
	rect(width/2,0,width/2,height/2); 
	fill(bright2);
	rect(0,height/2,width/2,height/2); 
	fill(bright3);
	rect(width/2,height/2,width/2,height/2); 

	// lines don't show up unless you put them at the bottom
	// divide into quads
	stroke(255, 0, 200);
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);
}