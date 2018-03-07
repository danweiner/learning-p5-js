var col;
var backgroundCol = {
	r: 250,
	g: 250,
	b: 100
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250, 250, 100);
	col = {
		r: 0,
		g: random(155, 255),
		b: random(100, 255)
	}
}

function draw() {
	
}

function mousePressed() {

	// changes to a random color when mouse pressed
	backgroundCol.r = random(0, 155);
	backgroundCol.g = random(155, 255);
	backgroundCol.b = random(100, 255);
	background(backgroundCol.r, backgroundCol.g, backgroundCol.b);
}

// color only changes when mouse is moving
// avoids random circle from being drawn in upper left corner
// I think from using the draw() function
function mouseMoved() {

	// color is more green towards left of screen and
	// more blue towards right of screen
	col.g = map(mouseX, 0, windowWidth, 155, 255)
	col.b = map(mouseX, 0, windowWidth, 100, 255)

	col.g = random(155, col.g);
	col.b = random(100, col.b);	

	print("col.g " + col.g);
	print("col.b " + col.b);

	noStroke();
	fill(col.r, col.g, col.b, 100);
	ellipse(mouseX, mouseY, 25, 25);
}
