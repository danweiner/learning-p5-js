function setup() {
	createCanvas(300, 300);
}

function draw() {
	background(255);
	stroke(0);
	noFill();

	var x = 0;
	for (var c = 255; c > 0; c -= 15) {
		fill(c);
		rect(x, height/2, 10, 10);
		x += 10;
	}

}