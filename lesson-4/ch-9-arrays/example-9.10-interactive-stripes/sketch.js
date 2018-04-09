// An array of stripes
let stripes = new Array(10);

function setup() {
	createCanvas(200, 200);

	// Initialize all 'stripes'
	for (let i = 0; i < stripes.length; i++) {
		stripes[i] = new Stripe();
	}
}

function draw() {
	background(100);

	// Move and display all "stripes"
	for (let i = 0; i < stripes.length; i++) {
		// Check if mouse is over the Stripe
		stripes[i].rollover(mouseX, mouseY); // Passing mouse coords into object
		stripes[i].move();
		stripes[i].display();
	}
}

class Stripe {

	constructor() {
		// horizontal pos always starts at 0
		this.x = 0;
		// random positive speed
		this.speed = random(1);
		// width of stripe
		this.w = random(10, 30);
		// state of stripe (mouse is over or not?)
		this.mouse = false;
	}

	display() {
		if(this.mouse) {
			fill(255);
		} else {
			fill(255, 100);
		}
		noStroke();
		rect(this.x, 0, this.w, height);
	}

	// Move stripe
	move() {
		this.x = this.x + this.speed;
		if (this.x > width + 20) this.x = -20;
	}

	// Check if point is inside of stripe
	rollover(mx, my) {
		// left edge is this.x, right edge is this.x + this.w
		if (mx > this.x && mx < this.x + this.w) {
			this.mouse = true;
		} else {
			this.mouse = false;
		}
	}

}