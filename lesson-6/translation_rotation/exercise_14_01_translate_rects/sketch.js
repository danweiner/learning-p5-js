function setup() {
	createCanvas(200, 200, WEBGL);
}

function draw() {
	background(225);
	stroke(255);
	fill(20, 100);

	translate(0, -height/2);
	rect(0, 0, 100, 100);
	translate(-50, 50);
	rect(0, 0, 100, 100);
	translate(0, 100);
	line(0, 0, -50, 50);

}