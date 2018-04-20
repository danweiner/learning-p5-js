class Drop {
	constructor() {
		this.w = 8;
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
		noStroke();
		fill(this.c);
		//ellipse(this.x, this.y, this.w);
		for(let i = 2; i < this.w; i++) {
			ellipse(this.x, this.y+i*4, i*2, i*2)
		}
	}

	caught() {
		this.speed = 0;
		this.y = -1000;
	}
}