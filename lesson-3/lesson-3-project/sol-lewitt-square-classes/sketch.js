let square;

function setup() {
	createCanvas(350, 350);
	// rows, rowWidth, innernumrows
	square = new Square(17, 10, color(255, 0, 0));
}

function draw() {
	background(0);
	noStroke();
	square.drawOuter();
	square.drawInner();
}