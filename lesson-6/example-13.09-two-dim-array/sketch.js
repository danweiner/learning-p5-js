// interesting how this is all in setup
let myArray;
function setup() {
	createCanvas(200, 200);
	let cols = width;
	let rows = height;

	// declare 2D array
	myArray = [];

	for (let i = 0; i < cols; i++) {
		myArray[i] = [];
		for (let j = 0; j < rows; j++) {
			myArray[i][j] = int(random(255));
		}
	}

	// Draw points
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			stroke(myArray[i][j]);
			point(i,j);
		}
	}

}

function draw() {

}