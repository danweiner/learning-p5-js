class Bullet {
	constructor() {
		this.x = width/2;
		this.y = height;
		this.w = 10;
		this.speed = 5;
		this.isFinished = false;
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

	intersect(d) {
		if (this.y - this.w/2 < d.y + d.h && 
			this.y - this.w/2 > d.y &&
			this.x + this.w/2 > d.x
			&& this.x - this.w/2 < d.x + d.w ) {
			return true;
		} else {
			return false;
		}
	}

	reachedTop() {
		if (this.y == 0) {
			return true;
		} else {
			return false;
		}
	}

	finished() {
		this.isFinished = true;
	}
}