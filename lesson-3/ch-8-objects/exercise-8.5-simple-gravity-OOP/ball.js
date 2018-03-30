class Ball {
	constructor(x, y, w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.speed = 0;
	}

	display() {
		fill(255);
		noStroke();
		ellipseMode(CENTER);
		ellipse(this.x, this.y, this.w, this.w);
	}

	move() {
		// Add speed to y location
		this.y += this.speed;

		// Add gravity to speed
		this.speed += grav;
	}

	checkEdges() {
		// If ball reaches bottom, reverse speed
		if (this.y + this.w/2 > height) {
			this.speed = this.speed * -0.95;
		}
	}
}