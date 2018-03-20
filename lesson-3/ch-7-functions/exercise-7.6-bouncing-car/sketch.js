var globalX = 0;
var globalY = 100;
var speed = 1;

function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(0);
	move();
	bounce();
	drawCar(globalX, globalY, 24, color(200, 0, 100));
}

function move() {
	globalX = globalX + speed;
}

function bounce() {
	if ((globalX > width) || (globalX < 0)) {
		speed = speed * -1;
	}
}
function drawCar(x, y, thesize, c) {
	var offset = thesize/4;
	rectMode(CENTER);
	stroke(200);
	fill(c);
	rect(x, y, thesize, thesize/2);
	fill(200);
	rect(x-offset, y-offset, offset, offset/2);
	rect(x+offset, y-offset, offset, offset/2);
	rect(x-offset, y+offset, offset, offset/2);
	rect(x+offset, y+offset, offset, offset/2);
}