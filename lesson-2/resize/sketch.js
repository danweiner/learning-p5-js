function setup() {

	//works best if browser starts at full size
	//so resizing fills entire screen
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(175, 0, 180);
	stroke(0);
	line(0, 0, windowWidth, windowHeight);
	line(0, windowHeight, windowWidth, 0);

	fill(175);
	ellipseMode(CENTER);
	ellipse(windowWidth/2, windowHeight/2, 
		windowWidth/4, windowHeight/4);

	rectMode(CENTER);
	rect(windowWidth/5, windowHeight/2, 
		windowWidth/8, windowHeight/8);

	rect(4*windowWidth/5, windowHeight/2, 
		windowWidth/8, windowHeight/8);
}