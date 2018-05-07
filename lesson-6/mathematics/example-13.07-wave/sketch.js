// starting angle
let theta = 0.0;

function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(255);
	// increment theta 
	theta += .02;

	noStroke();
	fill(0);

	let x = theta;

	// a simple way to draw the wave with an ellipse at each location
	for (let i = 0; i <= 20; i++) {
		// calculate y value based off of sine function
		let y = sin(x) * height/2;
		// draw ellipse
		ellipse(i*10, y+height/2, 16,16);
		// move along x axis
		x += .2;
	}
}