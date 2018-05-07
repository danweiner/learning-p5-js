let z = 0;

function setup() {
	createCanvas(200, 200, WEBGL);
}

function draw() {
	background(0);
	stroke(255);
	fill(100);

	translate(0, 0, z);
	rectMode(CENTER);
	rect(0, 0, 8, 8);

	z += .1;
}