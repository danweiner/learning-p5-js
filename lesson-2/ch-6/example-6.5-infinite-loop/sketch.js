var y = 80;			// vert location of each line
// also works with var x;		
var x = 0;			// hor location of first line
// also works with var spacing;
var spacing = 10;	// how far apart is each line
var len = 20;		// length of each line
var endLegs = 200;	// where should lines stop

function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(0);
	stroke(255);

	x = 0;
	// initial version was spacing = mouseX/2
	// Space out the lines in some range between 1 and 100
	spacing = constrain(mouseX/2, 1, 100);

	while (x <= endLegs) {
		line(x, y, x, y + len);

		// if spacing were ever 0 or negative, 
		// this would be an infinite loop
		x += spacing;
	}


}