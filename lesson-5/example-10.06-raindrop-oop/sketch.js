let drop;

function setup() {
	createCanvas(400, 400);
	drop = new Drop();
}

function draw() {
	background(255);
	drop.move();
	if (drop.reachedBottom()) {
		console.log('bottom!')
		noLoop();
	}
	drop.display();
}

class Drop {
	constructor() {
		this.w = 16;
		this.x = random(width);
		this.y = -this.w * 4; // a little above the window
		this.speed = random(1, 5);
		this.c = color(50, 100, 150);
	}

	move() {
		this.y += this.speed;
	}

	reachedBottom() {
		if (this.y > height + this.w * 4) {
			return true;
		} else {
			return false;
		}
	}

	display() {
		fill(this.c);
		noStroke();
		ellipse(this.x, this.y, this.w);
	}
}