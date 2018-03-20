function setup() {
	createCanvas(windowWidth, windowHeight);
	// call sum only once
	sum(10, 11, 12);
}

function draw() {
	
}

function sum(a, b, c) {
	var total = a + b + c;
	// will print to console
	print(total);
}