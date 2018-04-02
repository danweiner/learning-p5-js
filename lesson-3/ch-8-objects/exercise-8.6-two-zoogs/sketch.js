let zoog1;
let zoog2;

function setup() {
	createCanvas(200, 200);
	// x, y, w, h, eyeSize, c)
	zoog1 = new Zoog(100, 125, 60, 60, 16, color(255, 0, 0));
	zoog2 = new Zoog(150, 55, 80, 40, 8, color(0, 0, 255));
}

function draw() {
	background(255);
	// mouseX position determines speed factor
	let factor = constrain(mouseX/10, 0, 5);
	zoog1.jiggle(factor);
	zoog1.display();
	zoog2.jiggle(factor);
	zoog2.display();
}