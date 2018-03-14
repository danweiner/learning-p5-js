// two color vars
var c1 = 0;
var c2 = 255;

// start by incrementing c1 and decrementing c2
var c1dir = .1;
var c2dir = -.1;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	noStroke();

	// draw rect on the left (starts as blue turns red)
	fill(c1, 0, c2);
	rect(0, 0, width/2, height);

	// draw rect on right (starts as red turns blue)
	fill(c2, 0, c1);
	rect(width/2, 0, width/2, height);

	// adjust color values
	c1 = c1 + c1dir;
	c2 = c2 + c2dir;

	// reverse direction of col change
	if (c1 < 0 || c1 > 255) {
		c1dir *= -1;
	}

	if (c2 < 0 || c2 > 255) {
		c2dir *= -1;
	}
}