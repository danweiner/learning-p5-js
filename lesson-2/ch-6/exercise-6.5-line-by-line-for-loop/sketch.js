var endY;

function setup() {
	createCanvas(200, 200);
	frameRate(5);
	endY = 0;
}

function draw() {
	// background is moved to draw()
	background(0);
	for (var y = 0; y < endY; y += 10) {
		stroke(255);
		line(0, y, width, y);
	}
	endY += 10;

	// this makes it keep cycling
	if (endY > height) {
		endY = 0;
	}
}