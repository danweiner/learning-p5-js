var moving = false;

var circleX = 0;
var circleY = 100;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(100);
	stroke(255);
	fill(0);
	ellipse(circleX, circleY, 50, 50);
	if (moving) {
		circleX = circleX + 1;
	}

}

function mousePressed() {
	moving = !moving;
}