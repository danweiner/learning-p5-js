// Constructor initializes all variables

class Button {
	constructor(x, y, w, h) {
		// Button location and size
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;

		// Is the button on or off?
		// Always starts as off
		this.on = false;
	}

	click(mx, my) {
		// Check to see if a point is inside of rect
		if (mx > this.x && mx < this.x + this.w 
			&& my > this.y && my < this.y + this.h) {
			this.on = !this.on;
		}
	}

	display() {
		rectMode(CORNER);
		stroke(0);
		// color changes based on state of button
		if(this.on) {
			fill(175);
		} else {
			fill(0);
		}
		rect(this.x, this.y, this.w, this.h);
	}
}