// declare and initialize variables
var r = 100;
var g = 150;
var b = 200;
var a = 200;

var diam = 20;
var x = 100;
var y = 100;

function setup() {
	createCanvas(200, 200);
	background(255);
	smooth();
}

function draw() {
	//use the vars to draw an ellipse
	stroke(0);
	fill(r, g, b, a);
	ellipse(x, y, diam, diam);

}