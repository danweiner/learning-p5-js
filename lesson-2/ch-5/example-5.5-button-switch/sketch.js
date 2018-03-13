var on = false;

var r = {
	x: 300,
	y: 200,
	w: 100,
	h: 50
}

function setup() {
	createCanvas(600, 400);
}

function draw() {
	if (on) {
		background(0, 255, 0);
	} else {
		background(0);
	}

	stroke(255);
	strokeWeight(4);
	fill(0);

	if (mouseX > r.x && mouseX < r.x + r.w 
		&& mouseY > r.y && mouseY < r.y + r.h) {
		fill(255, 0, 200);
	}

	rect(r.x, r.y, r.w, r.h);

}

function mousePressed() {
	if (mouseX > r.x && mouseX < r.x + r.w 
		&& mouseY > r.y && mouseY < r.y + r.h) {
		on = !on;
	}
}