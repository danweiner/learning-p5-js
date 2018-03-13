/*	Move rect across canvas by incrementing variable
	start the shape at x = 0 and use an if statement
	to have it stop at x = 100.
	Rewrite the code using constrain
*/ 

var r = {
	x: 0,
	y: 100,
	w: 20, 
	f: 0
}

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(255);

	fill(r.f);
	rect(r.x, r.y, r.w, r.w);

	// for testing
	stroke(0);
	line(100, 0, 100, height)

	r.x = r.x + 1;

	// if (x >= 80) {
	// 	x = 80;
	// }

	// I like this version better because it incorporates rect.w
	r.x = constrain(r.x, 0, 80);
}