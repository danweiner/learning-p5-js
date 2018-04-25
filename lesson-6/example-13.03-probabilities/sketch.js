function setup() {
	createCanvas(200, 200);
	background(255);
	noStroke();
}

function draw() {
	// probabilities need three diff cases
	// these need to add up to 100%!
	let red_prob = 0.60;
	let green_prob = 0.10;
	let blue_prob = 0.30;

	let num = random(1);

	// if random number is less than .6
	if (num < red_prob) {
		fill(255, 53, 2, 150);
	} else if (num < green_prob + red_prob) {
		fill(156, 255, 28, 150);
	} else {
		fill(10, 52, 178, 150);
	}
	ellipse(random(width), random(height), 64, 64);
}