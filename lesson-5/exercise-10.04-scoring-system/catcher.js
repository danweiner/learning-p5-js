class Catcher {
	constructor(w) {
		this.w = w;
		this.x = 0;
		this.y = 0;
		this.c = color(50, 10, 10, 150);
	}

	setLocation(mx, my) {
		this.x = mx;
		this.y = my;
	}

	display() {
		stroke(0);
		fill(this.c);
		ellipse(this.x, this.y, this.w);
	}

	intersect(d) {
		// calculate distance
		let distance = dist(this.x, this.y, d.x, d.y);
		// in addition to calling functions, we can access
		// variables inside of an object using dot syntax
		if (distance < this.w/2 + d.w/2) {
			return true;
		} else {
			return false;
		}
	}
}