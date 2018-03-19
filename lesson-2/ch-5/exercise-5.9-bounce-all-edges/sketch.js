/*
Exercise 5-9: Rewrite Example 5-6 so that the ball not 
only moves horizontally, but vertically as well. 
Can you implement additional features, such as 
changing the size or color of the ball based on 
certain conditions? Can you make the ball speed up 
or slow down in addition to changing direction?
*/

// This whole program could have been written 
// without direction - see lesson 3 - need 
// xspeed and yspeed

var circle = {
	x: 400,
	y: 10,
	speed: 1,
	dirX: 1,
	dirY: 1,
	w: 32
}

function setup() {
	createCanvas(640, 400);
	smooth();

}

function draw() {
	background(255, 0, 200);

	ellipseMode(CORNER)

	circle.x = circle.x + circle.speed * circle.dirX;
	circle.y = circle.y + circle.speed * circle.dirY;


	// off the right side
	if (circle.x > width - circle.w 
		&& circle.dirX > 0) {
		circle.x = width - circle.w;
		circle.speed = circle.speed * random(.9, 1.2);
		circle.dirX *= -1;
	} 

	// off the left side
	if (circle.x < 0 && circle.dirX < 0) {
		//circle.speed = circle.speed * -1;
		circle.x = 0;
		circle.speed = circle.speed * random(.9, 1.2);
		circle.dirX *= -1;
	} 

	//off the top
	if (circle.y < 0 && circle.dirY < 0) {
		//circle.speed = circle.speed * -1;
		circle.y = 0;
		circle.speed = circle.speed * .9;
		circle.dirY *= -1;
	} 

	//off the bottom
	if (circle.y > height - circle.w && circle.dirY > 0) {
		circle.y = height - circle.w;
		circle.speed = circle.speed * random(.9, 1.2);
		circle.dirY *= -1;
	} 

	stroke(0);
	fill(175);
	ellipse(circle.x, circle.y, circle.w, circle.w);
}