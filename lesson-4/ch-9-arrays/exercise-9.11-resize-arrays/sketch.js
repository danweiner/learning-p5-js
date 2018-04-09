let balls = new Array(1);
let gravity = 0.1;

function setup() {
	createCanvas(200, 200);
	frameRate(30);
	//Initialize ball index 0;
	balls[0] = new Ball(50, 0, 16);
}

function draw() {
	background(100);
	// Update and display all balls
	for (let i = 0; i < balls.length; i++) {
		balls[i].gravity();
		balls[i].move();
		balls[i].display();
	}
}

function mousePressed() {
	// A new ball object

	// Make a new object at the mouse location
	let b = new Ball(mouseX, mouseY, 10);

	// Append to array
	// Dan actually uses 'balls.push(b) - I'll try append to see if it works
	balls = append(balls, b);
}

class Ball {
	constructor(x, y, w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.speed = 0;
	}

	gravity() {
		this.speed = this.speed + gravity;
	}

	move() {
		this.y = this.y + this.speed;

		if (this.y > height) {
			this.speed = this.speed * -0.95;
			this.y = height;
		}
	}

	display() {
		fill(255);
		noStroke();
		ellipse(this.x, this.y, this.w, this.w);
	}
}