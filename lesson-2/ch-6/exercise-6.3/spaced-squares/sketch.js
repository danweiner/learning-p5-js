function setup() {
	createCanvas(300, 300);
}

function draw() {
	background(255);
	stroke(0);
	noFill();

	for (var i = 0; i < 10; i++) {
		rect(i*20, height/2, 5, 5);
	}

}