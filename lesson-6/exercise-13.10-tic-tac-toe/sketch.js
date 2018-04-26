let board;
let cols = 3;
let rows = 3;

function setup() {
	createCanvas(300, 300);
	let w = width/cols;
	let h = height/rows;

	board = [];
	for (let i = 0; i < cols; i++) {
		board[i] = [];
		for (let j = 0; j < rows; j++) {
			board[i][j] = new Cell(i*w, j*h, w, h);
		}
	}
}

function draw() {
	background(255);
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			board[i][j].display();
		}
	}
}

function mousePressed() {
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			board[i][j].click(mouseX, mouseY);
		}
	}
}