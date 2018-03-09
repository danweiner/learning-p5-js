var zoogX;
var zoogY;

var eyeR;
var eyeG;
var eyeB;

function setup() {
	createCanvas(480, 270);
	// Feature 1 - zoogX and Y are initialized based on canvas size
	// We cannot initialize these vars before the createCanvas()
	// function since we are using built-in vars width and height

	zoogX = width / 2; // Zoog always starts in the middle

	// changed this too bc easier for debugging - you see Zoog at bottom of screen
	zoogY = height - 100; // Zoog always starts at bottom of the screen

}

function draw() {
	background(255); // white

	ellipseMode(CENTER);
	rectMode(CENTER);

	// body
	stroke(0);
	fill(150);
	// Feature 1: X and Y are used for shape locs
	rect(zoogX, zoogY, 20, 100);

	// head
	stroke(0);
	fill(255);
	ellipse(zoogX, zoogY - 30, 60, 60);

	// eyes
	// Feature 2: eyeR, G, B given random vals to use in fill()
	eyeR = random(255);
	eyeG = random(255);
	eyeB = random(255);
	fill(eyeR, eyeG, eyeB);

	ellipse(zoogX - 19, zoogY - 30, 16, 32);
	ellipse(zoogX + 19, zoogY - 30, 16, 32);

	// legs
	stroke(150);
	// I changed this to zoogY + 60 bc I didnt want legs to extend to height
	line(zoogX - 10, zoogY + 50, zoogX - 10, zoogY + 60);
	line(zoogX + 10, zoogY + 50, zoogX + 10, zoogY + 60);

	// Zoog moves up
	zoogY = zoogY - 1;


}