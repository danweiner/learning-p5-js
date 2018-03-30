let ball1;
let ball2;

let grav = 0.1;

function setup() {
	createCanvas(200, 200);
	// x, y, w
	ball1 = new Ball(50, 0, 16);
	ball2 = new Ball(100, 50, 32);
}

function draw() {
	background(100);
	ball1.display();
	ball1.move();
	ball1.checkEdges();
	ball2.display();
	ball2.move();
	ball2.checkEdges();
}

