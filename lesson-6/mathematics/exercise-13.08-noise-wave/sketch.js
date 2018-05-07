let t = 0.0;

function setup() {
	createCanvas(480, 270);
}

function draw() {
	background(255);

	t += .01;
	let x = t;

	noStroke();
	fill(0, 100);

	for (var i = 0; i < width; i++) {
		let y = noise(x) * height;
		ellipse(i, y, 32, 32);
		x += .05;
	}
}