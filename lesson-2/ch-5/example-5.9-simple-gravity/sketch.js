var x = 10;
var y = 0;

var d = 10;

var xspeed = .5;

var yspeed = 0;

var xdir = 1;

var ydir = 1;

// we use a smallnumber because this accumulates 
// over time, increasing the speed

var gravity = .1;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(155);

	fill(0);
	noStroke();
	ellipse(x, y, d, d);

	// add speed to location
	x = x + xspeed * xdir;
	y = y + yspeed;

	yspeed = yspeed + gravity;

	// if circle reaches bottom, reverse speed
	if (y > height) {
		// dampening effect
		yspeed = yspeed * -.95;
	}

	if (x > width - d/2 && xdir > 0) {
		x = width - d/2;
		xdir *= -1;
	}

	if (x < d/2 && xdir < 0) {
		x = d/2;
		xdir *= -1;
	}

}