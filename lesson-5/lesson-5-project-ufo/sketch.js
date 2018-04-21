let ufoX;
let ufoY;
let xspeed = -2;
let ufoIsFinished = false;

let bulletX;
let bulletY;
let bulletIsFinished = false;

let bullet;
function setup() {
	createCanvas(400, 400);
	ufoX = width-50;
	ufoY = 0;

	// bulletX = width/2;
	// bulletY = height;

	bullet = new Bullet();

}

function draw() {
	background(150);
	displayUFO();
	moveUFO();

	// create bullet
	// fill(0);
	// ellipse(bulletX, bulletY, 10);

	// // move bullet as long as bullet hasnt reached top
	// if (!bulletIsFinished) {
	// 	bulletY -= 1;
	// 	if (bulletY < 0) {
	// 		bulletIsFinished = true;
	// 	}
	// }
	bullet.display();
	bullet.move();
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

class Bullet {
	constructor() {
		this.x = width/2;
		this.y = height;
		this.w = 10;
		this.speed = 2;

		// this.isFinished = false;
	}

	display() {
		fill(0);
		ellipse(this.x, this.y, this.w);
	}

	move() {
		// // this.y -= this.speed;
		// if (!this.isFinished) {
		// 	this.y -= this.speed;
		// 	if (this.y < 0) {
		// 		this.isFinished = true;
		// 	}
		// }
		this.y -= this.speed;
		if (this.y < 0) {
			this.y = 0;
		}
	}
}

