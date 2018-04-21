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
		if (!this.isFinished) {
			this.x = this.x + this.xspeed;
			if (this.x < 0 || this.x > width - 40) {
				this.xspeed *= -1;
				this.y += 20;
			}
		} if (this.y > height - 20) {
			this.y = height - 20;
			this.isFinished = true;
		}
	}
}