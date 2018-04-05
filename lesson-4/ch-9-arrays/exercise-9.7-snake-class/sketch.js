let s0;
let s1;

function setup() {
	createCanvas(480, 270);
	// Initialize

	s0 = new Snake(50);
	s1 = new Snake(25);
}

function draw() {
	background(255);
	// Update and display
	s0.update(mouseX-30, mouseY);
	s0.display();

	s1.update(mouseX+30, mouseY);
	s1.display();

}