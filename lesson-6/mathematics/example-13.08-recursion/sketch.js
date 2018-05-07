function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(255);
	stroke(0);
	noFill();
	drawCircle(width/2, height/2, 100);
}

function drawCircle(x, y, radius) {
	ellipse(x, y, radius);
	if (radius > 8) {
		drawCircle(x + radius/2, y, radius/2);
		drawCircle(x - radius/2, y, radius/2)
		drawCircle(x, y + radius/2, radius/2);
		drawCircle(x, y - radius/2, radius/2)
	}
}