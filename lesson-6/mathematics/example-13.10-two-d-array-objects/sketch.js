let grid;

let cols = 10;
let rows = 10;

function setup() {
	createCanvas(200, 200);
	grid = [];
	for (let i = 0; i < cols; i++) {
		grid[i] = [];
		for (let j = 0; j < rows; j++) {
			grid[i][j] = new Cell(i*20,j*20,20, 20,i+j);
		}
	}
}

function draw() {
	background(0);
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j].display();
			grid[i][j].oscillate();
		}
	}
}

class Cell {
	constructor(x, y, w, h, angle) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.angle = angle;
	}

	display() {
		stroke(255);
		fill(127 + 127*sin(this.angle));
		rect(this.x, this.y, this.w, this.h);
	}

	oscillate() {
		this.angle += .02;
	}
}