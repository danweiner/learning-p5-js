// lines appear one at a time from the top
// no for loop is used

var y = 0;

function setup() {
	createCanvas(200, 200);
	//background is in setup()
	background(0);
	// slowing down the frame rate to easily see effect
	frameRate(5);
}

function draw() {
	// draw a line
	stroke(255);
	// only one line is drawn each time thru draw()
	line(0, y, width, y);
	// increment y
	y += 10;

}