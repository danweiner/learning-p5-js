let zoogs = new Array(200);

function setup() {
	createCanvas(400, 400);
	for (var i = 0; i < zoogs.length; i++) {
		zoogs[i] = new Zoog(random(width), random(height), 30, 30, 8);
	}
}

function draw() {
	background(255);
	for (var i = 0; i < zoogs.length; i++) {
		zoogs[i].display();
		zoogs[i].jiggle();
	}
}

class Zoog {
	constructor(x, y, w, h, eyeSize) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.eyeSize= eyeSize;
	}

	jiggle() {
		// Change the location
		this.x += random(-1, 1);
		this.y += random(-1, 1);

		// Constrain Zoog to window
		this.x = constrain(this.x, 0, width);
		this.y = constrain(this.y, 0, width);
	}

	display() {
		ellipseMode(CENTER);
		rectMode(CENTER);

		for (let i = this.y - this.h/3; i < this.y + this.h/2; i+= 10) {
			stroke(0);
			line(this.x - this.w/4, i, this.x + this.w/4, i);
		}
		
		//Draw Zoog's body
		stroke(0);
		fill(175);
		rect(this.x,this.y,this.w/6,this.h);

		// // Draw Zoog's head
		stroke(0);
		fill(255);
		ellipse(this.x,this.y-this.h,this.w,this.h);

		// // Draw Zoog's eyes
		fill(0);
		ellipse(this.x - this.w/3, this.y - this.h, this.eyeSize, this.eyeSize * 2);
		ellipse(this.x + this.w/3, this.y - this.h, this.eyeSize, this.eyeSize * 2);
		
		// // Draw Zoog's legs
		stroke(0);
		line(this.x - this.w/12, this.y + this.h/2, this.x - this.w/4, this.y + this.h/2 + 10);
		line(this.x + this.w/12, this.y + this.h/2, this.x + this.w/4, this.y + this.h/2 + 10);
	
	}
}