var x = 100;
var y = 100;
var w = 60;
var h = 60;
var eyeSize = 16;

var xspeed = 3;
var yspeed = 1;

function setup() {
	createCanvas(400, 400);
	smooth();
}

function draw() {
	// change location of Zoog by speed
	x = x + xspeed;
	y = y + yspeed;

	if ((x > width - w/2) || (x < w/2)) {
		xspeed *= -1;
	}

	if ((y > height - h - 10) || (y < h)) {
		yspeed *= -1;
	}

	background(0);
	ellipseMode(CENTER);
	rectMode(CENTER);
	noStroke();

	// body
	fill(150);
	rect(x, y, w/6, h*2);

	// head
	fill(255);
	ellipse(x, y-h/2, w, h);

	// eyes
	fill(0);
	ellipse(x - w/3, y - h/2, eyeSize, eyeSize * 2);
	ellipse(x + w/3, y - h/2, eyeSize, eyeSize * 2);

	// legs
	stroke(150);
	line(x-w/12, y + h, x - w/4, y + h + 10);
	line(x+w/12, y + h, x +w/4, y + h + 10);
}