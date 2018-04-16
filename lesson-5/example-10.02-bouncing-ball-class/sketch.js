let ball1;

function setup() {
	createCanvas(400, 400);
	ball1 = new Ball(30);
}

function draw() {
	background(0);
	noStroke();
	ball1.move();
	ball1.display();
}

class Ball {
	constructor(r, x, y) {
		this.r = r;
		this.x = random(width);
		this.y = random(height);
		this.xspeed = random(-5, 5);
		this.yspeed = random(-5, 5);
	}

	display() {
		fill(255);
		ellipse(this.x, this.y, this.r);
	}

	move() {
		this.x += this.xspeed;
		this.y += this.yspeed;

		if ((this.x + this.r/2 > width) || 
			(this.x <= this.r/2)) {
			this.xspeed *= -1;
		} else if ((this.y + this.r/2 > height) || 
			(this.y <= this.r/2)) {
			this.yspeed *= -1;
		}
	}
}