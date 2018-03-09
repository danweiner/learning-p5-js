var fidoX;
var fidoY;

var eyeR;
var eyeG;
var eyeB;

	// NEW FEATURE #1: Fido will rise from below the screen and fly off into space (above the screen.)
	// NEW FEATURE #2: Fido's eyes will be colored randomly as Fido moves.

function setup() { 
	createCanvas(480, 270);

	fidoX = width/2;      // Fido always starts in the middle
	fidoY = height - 10; // Fido starts below the screen

} 

function draw() { 
	background(220)
	ellipseMode(CENTER);
	rectMode(CENTER);

	// Feature #1.  fidoX and fidoY are used for the shape locations.		
	translate(fidoX, fidoY);

	//head
	fill(255); 
	ellipse(0, 0, 200, 250);

	//eyes
	ellipse(-35, -40, 
		40, 40);
	ellipse(35, -40, 
		40, 40);

	// Feature #2.  eyeR, eyeG, and eyeB are given random values and used in the fill() function.
	eyeR = random(255);
	eyeG = random(255);
	eyeB = random(255);
	fill(eyeR, eyeG, eyeB);
	ellipse(-35, -40, 
		10, 10);
	ellipse(35, -40, 
		10, 10);

	//nose
	fill(50);
	rect(0, 0, 30, 20, 5);

	fill(100, 100, 100, 67);

	//ears
	push();
	translate(-100, -50);
	rotate(PI / 6.0);
	rect(0, 0, 30, 130);
	pop();


	push();
	translate(100, -50);
	rotate(PI / -6.0);
	rect(0, 0, 30, 130);
	pop();

	// Fido moves up
	fidoY = fidoY - 1;

	// Exercise 4.6 - Fido shakes as he moves up the screen
	fidoX = fidoX + random(-1, 1);

}