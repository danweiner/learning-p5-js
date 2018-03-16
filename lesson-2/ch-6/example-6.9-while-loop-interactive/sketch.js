function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	// start with i as 0
	var i = 0;
	// while i < width
	while (i < width) {
		noStroke();
		// dist between curr rect and mouse is equal to 
		// abs val of diff between i and mouseX
		var distance = abs(mouseX - i)
		// scale for larger screens
		var c = map(distance, 0, width, 0, 255);
		fill(c);
		rect(i, 0, 10, height);
		i += 10;
	}
}