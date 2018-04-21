let ufoX;
let ufoY;
let xspeed = -2;
let ufoIsFinished = false;

let bullets = [];
function setup() {
	createCanvas(400, 400);
	ufoX = width-50;
	ufoY = 0;

	bullet = new Bullet();

}

function draw() {
	background(150);
	displayUFO();
	moveUFO();
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].display();
		bullets[i].move();
	}
	// bullet.display();
	// bullet.move();
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

function mousePressed() {
	let bullet = new Bullet();
	bullets.push(bullet);
}

class Bullet {
	constructor() {
		this.x = width/2;
		this.y = height;
		this.w = 10;
		this.speed = 2;
	}

	display() {
		fill(0);
		ellipse(this.x, this.y, this.w);
	}

	move() {	
		this.y -= this.speed;
		if (this.y < 0) {
			this.y = 0;
		}
	}
}

