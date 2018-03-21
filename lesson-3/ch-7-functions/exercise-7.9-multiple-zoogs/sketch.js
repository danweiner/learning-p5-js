function setup() {
	createCanvas(400, 200);
}

function draw() {
	background(0);
	// var y = height/2; I think this is an error
	for (var x = 80; x < width; x += 80) {
		drawZoog(x, 100, 60, 60, 16);
	}
}

function drawZoog(x, y, w, h, eyeSize) {
	stroke(0);
	fill(175);
	rectMode(CENTER);
	rect(x, y, w/6, h*2);

	// Draw Zoog's head
	fill(255);
	ellipse(x, y-h/2, w, h);

	// Draw Zoog's eyes
	fill(0);
	ellipse(x-w/3, y-h/2, eyeSize, eyeSize*2);
	ellipse(x+w/3, y-h/2, eyeSize, eyeSize*2);

	// Draw Zoog's legs
	stroke(255);
	line(x-w/12, y+h, x-w/4, y+h+10);
	line(x+w/12, y+h, x+w/4, y+h+10);
}