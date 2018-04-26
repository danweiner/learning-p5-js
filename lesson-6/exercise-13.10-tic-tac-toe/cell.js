class Cell {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.state = 0;
	}

	click(mx, my) {
		if (mx > this.x && mx < this.x + this.w 
			&& my > this.y && my < this.y + this.h) {
			this.state = (this.state + 1) % 3;
		}
	}

	display() {
		stroke(0);
		noFill();
		rect(this.x, this.y, this.w, this.h);

		let b = 8;

		if (this.state == 0) {
			// nothing
		} else if (this.state == 1) {
			// draw an O
			ellipse(this.x + this.w/2, this.y + this.h/2, this.w-b, this.h-b);
		} else if (this.state == 2) {
			// draw an X
			line(this.x+b, this.y+b, this.x+this.w-b, this.y+this.h-b);
			line(this.x+this.w-b, this.y+b, this.x+b, this.y+this.h-b);
		}
	}
}