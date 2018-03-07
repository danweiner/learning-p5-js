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
	backgroundCol.r = random(0, 255);
	backgroundCol.g = random(0, 255);
	backgroundCol.b = random(0, 255);
	background(backgroundCol.r, backgroundCol.g, backgroundCol.b);
}

// color only changes when mouse is moving
// avoids random circle from being drawn in upper left corner
// I think from using the draw() function
function mouseMoved() {
	noStroke();
	fill(col.r, col.g, col.b, 100);
	ellipse(mouseX, mouseY, 25, 25);

	col.r = random(0);
	col.g = random(155, 255);
	col.b = random(100, 255);	
}
