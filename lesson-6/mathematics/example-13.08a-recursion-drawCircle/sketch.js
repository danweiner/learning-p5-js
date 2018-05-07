function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(255);
	drawCircle(width/2, height/2, width);
}

function drawCircle(x, y, radius) {
	ellipse(x, y, radius);
	if (radius > 2) {
		radius *= .75;
		drawCircle(x, y, radius)
	}
}