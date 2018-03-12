var r = 150;
var g = 0;
var b = 0;

function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(r, g, b);

	// draw white line down middle of canvas
	stroke(255);
	line(width/2, 0, width/2, height)

	if (mouseX > width/2) {
		r = r + 1;
	} else {
		r = r - 1;
	}

	// if (r > 255) {
	// 	r = 255;
	// } else if (r < 0) {
	// 	r = 0; 
	// }

	// this does the same thing as the conditional above
	r = constrain(r, 0, 255)

	// becomes bright red if mouse on right, 
	// becomes black if mouse on left
}