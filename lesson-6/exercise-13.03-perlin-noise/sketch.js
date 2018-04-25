let xtime = 0.0;
let ytime = 100.0
let increment = 0.01;

function setup() {
	createCanvas(480, 270);
}

function draw() {
	background(255);
	let x = noise(xtime) * width;
	let y = noise(ytime) * height;
	xtime += increment;
	ytime += increment;

	stroke(0);
	fill(175);
	ellipse(x, y, 32, 32);
}