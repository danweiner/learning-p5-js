var fido = {
	x: 10,
	y: 0,
	w: 200,
	h: 240,
	xspeed: .8,
	yspeed: 0,
	gravity: .1,
	xdir: 1,
	ydir: 1, 
	damp: -.85
}

function setup() { 
 	 createCanvas(640, 640);
	
} 

function draw() { 
	background(220)
	ellipseMode(CENTER);
	rectMode(CENTER);

	move();
	bounce();
	head();
	eyes();
	nose();
	ears();
}

function move() {
	fido.y = fido.y + fido.yspeed;

	fido.yspeed = fido.yspeed + fido.gravity;

	fido.x = fido.x + fido.xspeed * fido.xdir;
}

function bounce() {
	// this works without checking if xdir > 0.  
	// not sure why it's necessary
	if (fido.x > width - fido.w/2 && fido.xdir > 0) {
		fido.x = width - fido.w/2;
		fido.xdir *= -1;
	}

	if (fido.x < fido.w/2 && fido.xdir < 0) {
		fido.x = fido.w/2;
		fido.xdir *= -1;
	}

	if (fido.y > height - fido.h/2) {
		fido.y = height - fido.h/2;
		fido.yspeed *= fido.damp;
	}
}

function head() {
	fill(255); 
	ellipse(fido.x, fido.y, fido.w, fido.h);
}

function eyes() {
	//eyes
	ellipse(fido.x - 35, fido.y - 40, 
	      fido.w/5, fido.h/6);
	ellipse(fido.x + 35, fido.y - 40, 
	      fido.w/5, fido.h/6);

	//pupils
	fill(0);
	ellipse(fido.x - 35, fido.y - 40, 
	      fido.w/15, fido.h/20);
	ellipse(fido.x + 35, fido.y - 40, 
	      fido.w/15, fido.h/20);
}

function nose() {
	//nose
	fill(50);
	rect(fido.x, fido.y, fido.w/5, fido.h/8, 5);

}

function ears() {
	//ears
	fill(100, 100, 100, 67);
	push();
		translate(fido.x, fido.y);
		rotate(PI / 6.0);
		rect(-120, -10, fido.w/7, fido.h/2);
	pop();

	push();
		translate(fido.x, fido.y);
		rotate(PI / -6.0);
		rect(120, -10, fido.w/7, fido.h/2);
	pop();
  
}



