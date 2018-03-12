var r = 0;
var g = 0;
var b = 0;

function setup() {
	createCanvas(200, 200);
}

function draw() {
	background(r, g, b);

	// divide canvas into quads
	stroke(0);
	line(width/2, 0, width/2, height)
	line(0, height/2, width, height/2)

	if (mouseX > width/2) {
		r = r + 1;
	} else {
		r = r - 1;
	}

	if (mouseY > height/2) {
		b = b + 1;
	} else {
		b = b - 1;
	}

	if (mouseIsPressed) {
		g = g + 1;
	} else {
		g = g - 1; 
	}

	r = constrain(r, 0, 255)
	g = constrain(g, 0, 255)
	b = constrain(b, 0, 255)
}
