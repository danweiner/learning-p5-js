function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(255);
	var y = 0;
	while (y < height) {
		stroke(0);
		line(0, y, width, y);
		y = y + 20;
	}

}