let x;
let y;
let xspeed = -2;
let isFinished = false;
function setup() {
	createCanvas(400, 400);
	x = width-50;
	y = 0;
}

function draw() {
	background(150);
	displayUFO();
	moveUFO();
}

function displayUFO() {
	fill(0);
	rect(x, y, 50, 30)
}

function moveUFO() {
	if (!isFinished) {
		x = x + xspeed;
		if (x < 0 || x > width - 50) {
			xspeed *= -1;
			y+= 30;
		}
	} if (y > height - 50) {
		y = height - 50;
		isFinished = true;
	}

}