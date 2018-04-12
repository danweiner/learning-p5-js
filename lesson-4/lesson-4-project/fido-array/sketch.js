let fidos = new Array(5);

function setup() {
	createCanvas(800, 600);
	// x, y, w, h, xspeed, yspeed
	for (var i = 0; i < fidos.length; i++) {
		fidos[i] = new Fido(random(width), random(height), 100, 120, random(.5, .8), 0);
	}
}

function draw() {
	background(220);
	for (var i = 0; i < fidos.length; i++) {
		fidos[i].display();
		fidos[i].move();
	}
	//noLoop();
}

function mousePressed() {
	for (let i = 0; i < fidos.length; i++) {
		fidos[i].click(mouseX, mouseY);
	}
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

		this.on = false;
	}

	display() {
		//background(220)
		ellipseMode(CENTER);
		rectMode(CENTER);

		//head
		fill(255); 
		ellipse(this.x, this.y, this.w, this.h);

		//eyes
		ellipse(this.x - this.w/5, this.y - this.h/6, 
		      this.w/5, this.h/6);
		ellipse(this.x + this.w/5, this.y - this.h/6, 
		      this.w/5, this.h/6);

		//pupils
		fill(0);
		ellipse(this.x - this.w/5, this.y - this.h/6, 
		      this.w/15, this.h/20);
		ellipse(this.x + this.w/5, this.y - this.h/6, 
		      this.w/15, this.h/20);

		//nose
		if(this.on) {
			fill(255);
		} else {
			fill(50);
		}
		rect(this.x, this.y, this.w/5, this.h/8, 5);

		//ears
		fill(100, 100, 100, 67);
		push();
			translate(this.x, this.y);
			rotate(PI / 6.0);
			rect(-this.w*.6, -(this.h *.04), this.w/7, this.h/2);
		pop();

		push();
			translate(this.x, this.y);
			rotate(PI / -6.0);
			rect(this.w*.6, -(this.h *.04), this.w/7, this.h/2);
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

	click(mx, my) {
		//click on face to turn nose to white or black
		if (mx > this.x - (this.w/2) && mx < this.x + this.w/2
			&& my > this.y - this.h/2 && my < this.y + this.h/2) {
			this.on = !this.on;
		}


	}
}