// Declare car object as a global variable
let car;

function setup() {
	createCanvas(200, 200);
	// Initialize Car object
	car = new Car();
}

function draw() {
	background(0);
	// Operate Car object
	car.display();
	car.drive();
}

class Car {
	constructor(c, xpos, ypos, xspeed) {
		this.c = color(255);
		this.xpos = width/2;
		this.ypos = height/2;
		this.xspeed = 1;
	}

	// Functionality
	display() {
		rectMode(CENTER);
		fill(this.c);
		rect(this.xpos, this.ypos, 20, 10);
	}

	drive() {
		this.xpos += this.xspeed;
		if (this.xpos > width) {
			this.xpos = 0;
		}
	}
}