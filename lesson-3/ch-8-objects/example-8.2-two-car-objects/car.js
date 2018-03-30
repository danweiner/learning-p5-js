class Car {
	constructor(c, xpos, ypos, xspeed) {
		this.c = c;
		this.xpos = xpos;
		this.ypos = ypos;
		this.xspeed = xspeed;
	}

	// Functionality
	display() {
		rectMode(CENTER);
		fill(this.c);
		rect(this.xpos, this.ypos, 20, 10);
	}

	move() {
		this.xpos += this.xspeed;
		if (this.xpos > width) {
			this.xpos = 0;
		}
	}
}