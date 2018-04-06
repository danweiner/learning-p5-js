let cars = new Array(100);

function setup() {
	createCanvas(480, 270);
	// initialize
	for (let i = 0; i < cars.length; i++) {
		cars[i] = new Car(color(i*2), 0, i*2, i/20.0);
	}
}

function draw() {
	background(255);

	// run
	for (let i = 0; i < cars.length; i++) {
		cars[i].move();
		cars[i].display();
	}
}

class Car {
	constructor(c, xpos, ypos, xspeed) {
		this.c = c;
		this.xpos = xpos;
		this.ypos = ypos;
		this.xspeed = xspeed;
	}

	display() {
		rectMode(CENTER);
		stroke(0);
		fill(this.c);
		rect(this.xpos, this.ypos, 20, 10);
	}

	move() {
		this.xpos = this.xpos + this.xspeed;
		if (this.xpos > width) {
			this.xpos = 0;
		}
	}
}