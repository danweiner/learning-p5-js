let x, y;


function setup() {
	createCanvas(400, 400);
	x = width/2;
	y = 0;
}

function draw() {
	background(255);
	fill(50, 100, 150);
	noStroke();
	ellipse(x, y, 16, 16);
	y++;
}