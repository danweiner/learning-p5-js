function setup() {
	createCanvas(windowWidth, windowHeight);
	print('a');		// a
	function1();	// e, f
	print('b');		// b
}

function draw() {
	print('c');		// c
	function2();	// g, e, f, h
	print('d');		// d
	function1();	// e, f
	// stops draw() from looping
	noLoop();
}

function function1() {
	print('e');
	print('f');
}

function function2() {
	print('g');
	function1();
	print('h');
}