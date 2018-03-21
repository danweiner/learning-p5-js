var zoog = {
	x: 100,
	y: 100,
	w: 60,
	h: 60,
	eyesize: 16
}

function setup() {
	createCanvas(200, 200);
	smooth();
}

function draw() {
	background(255);
	// mouseX position determines speed factor for 
	// jiggleZoog function
	var factor = constrain(mouseX/10, 0, 5);
	jiggleZoog(factor);

	// pass in a color to drawZoog
	var d = dist(zoog.x, zoog.y, mouseX, mouseY);
	var c = color(d);
	drawZoog(d);

}

function jiggleZoog(speed) {
	// change x and y loc of Zoog randomly
	zoog.x = zoog.x + random(-1, 1) * speed
	zoog.y = zoog.y + random(-1, 1) * speed

	// constrain zoog to window
	zoog.x = constrain(zoog.x, 0, width);
	zoog.y = constrain(zoog.y, 0, height);
}

function drawZoog(eyeColor) {
	ellipseMode(CENTER);
	rectMode(CENTER);

	// arms
	for(var i = zoog.y - zoog.h/3; i < zoog.y + zoog.h/2; i += 10) {
		stroke(0);
		line(zoog.x - zoog.w/4, i, zoog.x + zoog.w/4, i);
	}

	// body
	stroke(0);
	fill(175);
	rect(zoog.x, zoog.y, zoog.w/6, zoog.h);

	// head
	fill(255)
	ellipse(zoog.x, zoog.y - zoog.h, zoog.w, zoog.h);

	// Draw Zoog's eyes
	fill(eyeColor);
	ellipse(zoog.x - zoog.w/3, zoog.y - zoog.h,
			zoog.eyesize,zoog.eyesize*2);
	ellipse(zoog.x + zoog.w/3,zoog.y - zoog.h,zoog.eyesize,zoog.eyesize*2);
	
	// Draw Zoog's legs
	stroke(0);
	line(zoog.x - zoog.w/12,zoog.y + zoog.h/2,
		zoog.x - zoog.w/4,zoog.y + zoog.h/2 + 10);
	line(zoog.x + zoog.w/12,zoog.y + zoog.h/2,
		zoog.x + zoog.w/4,zoog.y + zoog.h/2 + 10);


}