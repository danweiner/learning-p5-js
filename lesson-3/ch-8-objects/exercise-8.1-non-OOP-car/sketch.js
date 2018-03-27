let c;
let xpos;
let ypos;
let xpseed;

function setup() {
	createCanvas(200, 200);
	c = color(255);
	xpos = width/2;
	ypos = height/2;
	xspeed = 1;
}

function draw() {
	background(0);
	display();
	drive();
}

function display() {
	rectMode(CENTER);
	fill(c);
	rect(xpos, ypos, 20, 10);
}

function drive() {
	xpos += xspeed;
	if (xpos > width) {
		xpos = 0;
	}
}