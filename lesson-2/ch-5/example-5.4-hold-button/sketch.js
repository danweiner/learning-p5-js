var button = false;

var r = {
	x: 50,
	y: 50,
	w: 100,
	h: 75
}

function setup() {
	createCanvas(480, 270);
}

function draw() {
	// button is pressed if (mouseX, mouseY) is inside r 
	// and mouseIsPressed is true
	if (mouseX > r.x && mouseX < r.x + r.w 
		&& mouseY > r.y && mouseY < r.y + r.y 
		&& mouseIsPressed) {
		button = true;
	} else {
		button = false;
	}

	if (button) {
		background(255);
		stroke(0);
	} else {
		background(0);
		stroke(255);
	}

	fill(175);
	rect(r.x, r.y, r.w, r.h);
}