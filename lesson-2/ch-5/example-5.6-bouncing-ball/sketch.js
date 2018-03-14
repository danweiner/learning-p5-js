var circle = {
	x: 0,
	y: 100,
	speed: 1,
	w: 32
}

function setup() {
	createCanvas(400, 400);
	smooth();
}

function draw() {
	background(255, 0, 200);

	ellipseMode(CORNER)

	circle.x = circle.x + circle.speed;

	if ((circle.x > width - circle.w) 
		|| (circle.x < 0)) {
		circle.speed = circle.speed * -1;
	}

	stroke(0);
	fill(175);
	ellipse(circle.x, circle.y, circle.w, circle.w);
}