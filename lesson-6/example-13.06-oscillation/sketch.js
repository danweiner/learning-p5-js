let theta = 0.0;

function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(255);

	// get the result of the sine function
	// scale so that values oscillate between 0 and width
	// by adding 1 we get vals between 0 and 2
	// by multiplying by 100, we get val between 0 and 200

	let x = (sin(theta) + 1) * width/2; 

	// with each cycle, increment theta
	theta += .05;

	// draw the ellipse at the value produced by the sine
	fill(0);
	stroke(0);
	line(width/2, 0, x, height/2);
	ellipse(x, height/2, 16, 16);
}