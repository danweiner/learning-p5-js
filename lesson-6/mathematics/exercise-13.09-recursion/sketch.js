function setup() {
	createCanvas(400, 200);
}

function draw() {
	background(255);
	stroke(0);
	branch(width/2, height, 100);
}

function branch(x, y, h) {
	line(x, y, x-h, y-h);
	line(x, y, x+h, y-h);
	if (h > 2) {
		branch(x-h, y-h, h/2);
		branch(x+h, y-h, h/2);
	}
}