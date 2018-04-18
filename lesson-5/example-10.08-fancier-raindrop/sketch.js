let drops = new Array(1000);
let totalDrops = 0;

function setup() {
	createCanvas(400, 400);
	for(let i = 0; i < drops.length; i++) {
		drops[i] = new Drop();
	}
	//frameRate(30);
}

function draw() {
	background(255);

	// Initialize one drop
	drops[totalDrops] = new Drop();

	// Increment totalDrops
	totalDrops++

	// if we hit the end of the array
	if (totalDrops > drops.length) {
		totalDrops = 0; // Start over
	}

	// We only want to display totalDrops
	for(let i = 0; i < totalDrops; i++) {
		drops[i].move();
		drops[i].display();
	}
}

class Drop {
	constructor() {
		this.w = 8;
		this.x = random(width);
		this.y = -this.w * 4; // a little above the window
		this.speed = random(1, 5);
		this.c = color(50, 100, 150);
	}

	move() {
		this.y += this.speed;
	}

	reachedBottom() {
		if (this.y > height + this.w * 4) {
			return true;
		} else {
			return false;
		}
	}

	display() {
		// fill(this.c);
		// noStroke();
		//ellipse(this.x, this.y, this.w);
		noStroke();
		fill(this.c);
		for(let i = 2; i < this.w; i++) {
			ellipse(this.x, this.y+i*4, i*2, i*2)
		}
	}
}