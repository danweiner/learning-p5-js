function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(0);
	stroke(0);

	// top left square
	fill(distance(0, 0, mouseX, mouseY));
	rect(0, 0, width/2 - 1, height/2 - 1);

	// top right square
	fill(distance(width, 0, mouseX, mouseY));
	rect(width/2, 0, width/2 - 1, height/2 - 1);

	// bottom left square
	fill(distance(0, height, mouseX, mouseY));
	rect(0, height/2, width/2 - 1, height/2 - 1);

	// bottom right square
	fill(distance(width, height, mouseX, mouseY));
	rect(width/2, height/2, width/2 - 1, height/1 - 1);

}

function distance(x1, y1, x2, y2) {
	var dx = x1 - x2;
	var dy = y1 - y2;
	var d = sqrt(dx*dx + dy*dy);
	return d;
}