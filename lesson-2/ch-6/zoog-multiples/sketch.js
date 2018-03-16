var w = 60;
var h = 60;
var eyeSize = 16;

function setup() {
	createCanvas(400, 200);
	smooth();
}

function draw() {
	background(255);
	ellipseMode(CENTER);
	rectMode(CENTER);

	var y = height/2;

	// multiple instances of zoog
	// we must include x in a for loop
	for (var x = 80; x < width; x += 80) {
		// body
		stroke(0);
		fill(175);
		rect(x, y, w/6, h*2);

		// head
		fill(255);
		ellipse(x, y-h/2, w, h);

		// eyes
		fill(0);
		ellipse(x-w/3, y-h/2, eyeSize, eyeSize*2);
		ellipse(x+w/3, y-h/2, eyeSize, eyeSize*2);

		// legs
		stroke(0);
		line(x-w/12, y+h, x-w/4, y+h+10);
		line(x+w/12, y+h, x+w/4, y+h+10);
	}
}