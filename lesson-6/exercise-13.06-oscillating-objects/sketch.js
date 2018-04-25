let oscillators = [];

function setup() {
	createCanvas(480, 270);
	for (let i = 0; i < 10; i++) {
		oscillators[i] = new Oscillator();
	}
}

function draw() {
	background(255);
	for (let i = 0; i < oscillators.length; i++) {
		oscillators[i].oscillate();
		oscillators[i].display();
	}
}