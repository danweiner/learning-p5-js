function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(255);
	for (var y = 0; y < height; y += 20) {
		stroke(0);
		line(0, y, width, y);
	}
}