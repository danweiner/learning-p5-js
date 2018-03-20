function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(255);
	// note the use of color for storing variables of 
	// color datatype 
	drawCar(100, 100, 64, color(200, 200, 0))
	drawCar(50, 75, 32, color(0, 200, 100))
	drawCar(80, 175, 40, color(200, 0, 0))
}

function drawCar(x, y, thesize, c) {
	// local var in a function
	var offset = thesize/4;

	rectMode(CENTER);
	//main car body
	stroke(0);
	fill(c);
	rect(x, y, thesize, thesize/2);

	//draw four wheels relative to center
	fill(0);
	rect(x-offset, y-offset, offset, offset/2);
	rect(x+offset, y-offset, offset, offset/2);
	rect(x-offset, y+offset, offset, offset/2);
	rect(x+offset, y+offset, offset, offset/2);

}