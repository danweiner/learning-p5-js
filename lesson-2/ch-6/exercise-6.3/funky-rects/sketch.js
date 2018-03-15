function setup() {
	createCanvas(300, 300);
}

function draw() {
	background(255);
	stroke(0);
	noFill();

	for (var i = 1.0; i < width; i*=1.1) {
		rect(0, i, i, i*2);
	}

}