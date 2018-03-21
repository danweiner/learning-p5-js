function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	print(tempConverter(212));		// 100
	noLoop();
}

function tempConverter(f) {
	var c = (f-32) * 5/9;
	return c;
}