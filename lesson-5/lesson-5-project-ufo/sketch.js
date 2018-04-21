let ufoX;
let ufoY;
let xspeed = -2;
let ufoIsFinished = false;

let bulletX;
let bulletY;
let bulletIsFinished = false;
function setup() {
	createCanvas(400, 400);
	ufoX = width-50;
	ufoY = 0;

	bulletX = width/2;
	bulletY = height;
}

function draw() {
	background(150);
	displayUFO();
	moveUFO();

	// create bullet
	fill(0);
	ellipse(bulletX, bulletY, 10);

	// move bullet as long as bullet hasnt reached top
	if (!bulletIsFinished) {
		bulletY -= 1;
		if (bulletY < 0) {
			bulletIsFinished = true;
		}
	}
}

function displayUFO() {
	fill(0);
	rect(ufoX, ufoY, 50, 30)
}

function moveUFO() {
	if (!ufoIsFinished) {
		ufoX = ufoX + xspeed;
		if (ufoX < 0 || ufoX > width - 50) {
			xspeed *= -1;
			ufoY += 30;
		}
	} if (ufoY > height - 50) {
		ufoY = height - 50;
		ufoIsFinished = true;
	}

}

