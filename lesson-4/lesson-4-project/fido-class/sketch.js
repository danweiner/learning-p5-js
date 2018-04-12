let fido;

function setup() {
	createCanvas(600, 600);
	// x, y, w, h
	fido = new Fido(10, 0, 200, 240, .5, 0);
}

function draw() {
	fido.display();
	fido.move();
}

class Fido {
	constructor(x, y, w, h, xspeed, yspeed) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.xspeed = xspeed;
		this.yspeed = yspeed;

		this.xdir = 1;
		this.ydir = 1;
		this.gravity = .1;
	}

	display() {
		background(220)
		ellipseMode(CENTER);
		rectMode(CENTER);
		//head
		fill(255); 
		ellipse(this.x, this.y, this.w, this.h);

		//ethis.yes
		ellipse(this.x - 35, this.y - 40, 
		      this.w/5, this.h/6);
		ellipse(this.x + 35, this.y - 40, 
		      this.w/5, this.h/6);

		//pupils
		fill(0);
		ellipse(this.x - 35, this.y - 40, 
		      this.w/15, this.h/20);
		ellipse(this.x + 35, this.y - 40, 
		      this.w/15, this.h/20);

		//nose
		fill(50);
		rect(this.x, this.y, this.w/5, this.h/8, 5);

		fill(100, 100, 100, 67);

		//ears
		push();
			translate(this.x, this.y);
			rotate(PI / 6.0);
			rect(-120, -10, this.w/7, this.h/2);
		pop();

		push();
			translate(this.x, this.y);
			rotate(PI / -6.0);
			rect(120, -10, this.w/7, this.h/2);
		pop();
	}

	move() {
		this.y = this.y + this.yspeed;

		this.yspeed = this.yspeed + this.gravity;

		this.x = this.x + this.xspeed * this.xdir;

		// this works without checking if xdir > 0.  
		// not sure why it's necessary
		if (this.x > width - this.w/2 && this.xdir > 0) {
			this.x = width - this.w/2;
			this.xdir *= -1;
		}

		if (this.x < this.w/2 && this.xdir < 0) {
			this.x = this.w/2;
			this.xdir *= -1;
		}

		if (this.y > height - this.h/2) {
			this.y = height - this.h/2;
			this.yspeed *= -.95;
		}
	}
}