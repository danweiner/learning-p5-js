function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(255);
	stroke(0);
	fill(175);

	// grab mouse coordinates, constrained to the window
	let mx = constrain(mouseX, 0, width - 100);
	let my = constrain(mouseY, 0, height - 100);

	// translate to mouse location
	translate(mx, my);
	ellipse(0, 0, 8);

	translate(100, 0);
	ellipse(0, 0, 8);

	translate(0, 100);
	ellipse(0, 0, 8);

	translate(-100, 0);
	ellipse(0, 0, 8);

}