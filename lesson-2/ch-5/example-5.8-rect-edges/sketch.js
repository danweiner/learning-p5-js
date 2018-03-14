var x = 0;
var y = 0;

var speed = 2;

var state = 0;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(100);

	// display the square
	noStroke();
	fill(255);
	rect(x, y, 10, 10);

	// if state is 0 move to the right
	if (state == 0) {
		x += speed;
		if (x > width - 10) {
			x = width - 10;
			state = 1;
		} 
	} else if (state == 1) {
		y += speed;
		if (y > height - 10) {
			y = height - 10;
			state = 2;
		}
	} else if (state == 2) {
		x -= speed;
		if (x < 0) {
			x = 0;
			state = 3;
		}
	} else if (state == 3) {
		y -= speed;
		if (y < 0) {
			y = 0;
			state = 0;
		}
	}
}