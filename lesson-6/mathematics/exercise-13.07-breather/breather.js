class Breather {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.rad = random(6, 24);

		// angle for oscillation
		this.theta = random(PI);
		this.dtheta = random(0.01, 0.1);
	}

	breath() {
		this.theta += this.dtheta;
	}

	display() {
		let r = this.rad + this.rad * (sin(this.theta) + 1);
		fill(175, 100);
		stroke(0);
		ellipse(this.x, this.y, r, r);
	}
}