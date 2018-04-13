let catcher;

function setup() {
	createCanvas(400, 400);
	catcher = new Catcher(32);
}

function draw() {
	background(255);
	catcher.setLocation(mouseX, mouseY);
	catcher.display();
}

class Catcher {
	constructor(r) {
		this.r = r;
		this.x = 0;
		this.y = 0;
	}

	setLocation(mx, my) {
		this.x = mx;
		this.y = my;
	}

	display() {
		stroke(0);
		fill(175);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}
}