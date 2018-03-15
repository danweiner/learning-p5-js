function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(255);
	var w = width;
	while (w > 0) {
		stroke(0);
		fill(w);
		ellipse(width/2, height/2, w, w);
		w -= 20;
	}
}