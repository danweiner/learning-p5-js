var x = 10;
var y = 0;
var w = 200;
var h = 240;

var xspeed = .5;
var yspeed = 0;
var gravity = .1;

var xdir = 1;
var ydir = 1;

function setup() { 
 	 createCanvas(640, 640);
	
} 

function draw() { 

	y = y + yspeed;

	yspeed = yspeed + gravity;

	x = x + xspeed * xdir;

	// this works without checking if xdir > 0.  
	// not sure why it's necessary
	if (x > width - w/2 && xdir > 0) {
		x = width - w/2;
		xdir *= -1;
	}

	if (x < w/2 && xdir < 0) {
		x = w/2;
		xdir *= -1;
	}

	if (y > height - h/2) {
		y = height - h/2;
		yspeed *= -.95;
	}

	// if (y < h/2) {
	// 	y = h/2;
	// 	ydir *= -1;
	// 	yspeed = yspeed * -.95;
	// }

	background(220)
	ellipseMode(CENTER);
	rectMode(CENTER);
	//head
	fill(255); 
	ellipse(x, y, w, h);

	//eyes
	ellipse(x - 35, y - 40, 
	      w/5, h/6);
	ellipse(x + 35, y - 40, 
	      w/5, h/6);

	//pupils
	fill(0);
	ellipse(x - 35, y - 40, 
	      w/15, h/20);
	ellipse(x + 35, y - 40, 
	      w/15, h/20);

	//nose
	fill(50);
	rect(x, y, w/5, h/8, 5);

	fill(100, 100, 100, 67);

	//ears
	push();
		translate(x, y);
		rotate(PI / 6.0);
		rect(-120, -10, w/7, h/2);
	pop();

	push();
		translate(x, y);
		rotate(PI / -6.0);
		rect(120, -10, w/7, h/2);
	pop();
   

}