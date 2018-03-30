let zoog;

function setup() {
	createCanvas(200, 200);
	zoog = new Zoog(100, 125, 60, 60, 16);
}

function draw() {
	background(255);
	// mouseX position determines speed factor
	let factor = constrain(mouseX/10, 0, 5);
	zoog.jiggle(factor);
	zoog.display();
}