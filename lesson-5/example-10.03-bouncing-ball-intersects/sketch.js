let ball1;
let ball2;

function setup() {
	createCanvas(400, 400);
	ball1 = new Ball(30);
	ball2 = new Ball(45);
}

function draw() {
	background(255);
	ball1.move();
	ball2.move();

	if (ball1.intersect(ball2)) {
		ball1.highlight();
		ball2.highlight();
	}

	ball1.display();
	ball2.display();

}


class Ball {
	constructor(r, x, y) {
		this.r = r;
		this.x = random(this.r/2, width - this.r/2);
		this.y = random(this.r/2, height - this.r/2);
		this.xspeed = random(-5, 5);
		this.yspeed = random(-5, 5);
		this.c = color(100, 50);
	}

	display() {
		fill(this.c);
		ellipse(this.x, this.y, this.r);
	}

	move() {
		this.x += this.xspeed;
		this.y += this.yspeed;

		if ((this.x + this.r/2 >= width) || 
			(this.x <= this.r/2)) {
			this.xspeed *= -1;
		} 
		if ((this.y + this.r/2 >= height) || 
			(this.y <= this.r/2)) {
			this.yspeed *= -1;
		}
	}

	highlight() {
		// whenever the balls are touching, this function is called and the
		// color is darkened
		this.c = color(0, 150);
	}

	// A function that returns true of false based on whether two 
	// circles intersect
	// If the distance is less than the sum of radii the circles touch

	intersect(other) {
		let distance = dist(this.x, this.y, other.x, other.y); // calculate distance
		if(distance < this.r/2 + other.r/2) {		// compare distance to r1 + r2
			return true;
		} else {
			return false;
		}
	}

}