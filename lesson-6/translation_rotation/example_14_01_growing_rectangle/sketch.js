let r = 8;

function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(255);

	// display rect in middle of screen
	stroke(0);
	fill(175);
	rectMode(CENTER);
	rect(width/2, height/2, r, r);

	// increase the rect size
	r++;
}