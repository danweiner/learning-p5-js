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