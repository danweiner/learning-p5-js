let time = 0.0;
let increment = .01;

function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(255);
	let n = noise(time) * width;
	time += increment;

	fill(0);
	ellipse(width/2, height/2, n, n);
}