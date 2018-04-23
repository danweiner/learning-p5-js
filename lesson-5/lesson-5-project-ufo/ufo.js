class UFO {
	constructor() {
		this.x = width - 40;
		this.y = 0;
		this.w = 40;
		this.h = 20;
		this.xspeed = -2;
		this.isFinished = false;
	}

	display() {
		fill(0);
		rect(this.x, this.y, this.w, this.h);
	}

	move() {
		this.x = this.x + this.xspeed;
		if (this.x < 0 || this.x > width - 40) {
			this.xspeed *= -1;
			this.y += 20;
		}
	}

	reset() {
		this.x = width - 40;
		this.y = 0;
		this.xspeed = -this.xspeed;
		this.isFinished = false;
	}

	reachedBottom() {
		if (this.y > height - 40) {
			return true;
		} else {
			return false;
		}
	}

	finished() {
		this.isFinished = true;
	}

	levelUp() {
		this.x = width - 40;
		this.y = 0;
		if (this.xspeed > 0) {
			this.xspeed = (-this.xspeed) - 2;
		} else {
			this.xspeed = this.xspeed - 2;
		}
		this.isFinished = false;
	}
}