// A Polar coordinate
let r = 75;
let theta = 0;

function setup() {
	createCanvas(200, 200);
	background(255);
}

function draw() {
	// Polar to Cartesian conversion
	let x = r * cos(theta);
	let y = r * sin(theta);

	// Draw an ellipse at x,y
	noStroke();
	fill(0);
	ellipse(x+width/2, y + height/2, 16, 16);

	// Increment the angle
	theta += .01;

}