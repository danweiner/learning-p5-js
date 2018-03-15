function setup() {
	createCanvas(300, 300);
}

function draw() {
	background(255);
	stroke(0);
	noFill();

	var i = 0;
	while (i < 10) {
		ellipse(width/2, height/2, i*10, i*20);
		i++;
	}
}