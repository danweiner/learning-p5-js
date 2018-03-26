var canSide = 350;
var numStripes = 17;
var stripeH = Math.floor(canSide / 35);
var w = stripeH;
var base = canSide * 0.71428571428;
var numCols = base / w;
var numWhitePerSide = Math.floor(numCols / 4);

var tHeight = canSide * 0.71428571428;

function setup() {
	createCanvas(canSide, canSide);
}

function draw() {
	background(0);
	noStroke();
	noLoop();

	drawStripes();
	drawTriangle();
	drawLeft();
	drawRight();



}

function drawStripes() {
	fill(255);
	for (let i = stripeH; i < height; i += stripeH * 2) {
		rect(0, i, width, stripeH);
	}
}

function drawTriangle() {
	fill(0);
	triangle(width/7, height * 0.85714285714, width/2, height/7,
		width * 0.85714285714, height * 0.85714285714);
}

function drawLeft() {
	fill(255);
	for (let i = 0; i < numWhitePerSide; i++) {
		push();
		beginShape();
		// bottom left
		vertex((width * 0.171428571) + ((stripeH * 2) * i), 
			height * 0.85714285714);
		// top left
		vertex((width * 0.171428571) + ((stripeH * 2) * i), 
			height * 0.85714285714 - (stripeH * 2) - ((stripeH * 4) * i));
		// top right
		vertex(width/5 + ((stripeH * 2) * i), 
			height * 0.85714285714 - (stripeH * 4) - ((stripeH * 4) * i));
		// bottom right
		vertex(width/5 + ((stripeH * 2) * i), height * 0.85714285714);
		endShape();
		pop();
	}
}

function drawRight() {
	fill(255);
	for (let i = 0; i < numWhitePerSide; i++) {
		push();
		beginShape();
		// bottom left
		vertex(width/2 + stripeH/2 + ((stripeH * 2) * i), 
			height * 0.85714285714);
		// top left
		vertex(width/2 + stripeH/2 + ((stripeH * 2) * i), 
			(height * 0.171428571) + ((stripeH * 4) * i));
		// top right
		vertex(width/2 + stripeH/2 + stripeH + ((stripeH * 2) * i), 
			(height * 0.171428571) + (stripeH * 2) + ((stripeH * 4) * i));
		// bottom right
		vertex(width/2 + stripeH/2 + stripeH + ((stripeH * 2)* i), 
			height * 0.85714285714);
		endShape();
		pop();
	}
}