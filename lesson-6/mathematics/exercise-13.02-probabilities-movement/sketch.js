// Exercise 13-2: Fill in the blanks in the following code so that the circle has a 10% chance of 
// moving up, a 20% chance of moving down, and a 70% chance of doing nothing.

let y = 100;

function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(0);
	let r = random(1);
	if (r < .1) {
		y--
	} else if (r < .3 ) {
		y++
	} 
	ellipse(width/2, y, 16, 16);

}