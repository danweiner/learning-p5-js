let buttons = new Array(6);

function setup() {
	createCanvas(600, 200);
	// loop to evenly spaceout buttons along window
	for (let i = 0; i < buttons.length; i++) {
		buttons[i] = new Button(i*100+25, height/2+25, 50, 50);
	}
}

function draw() {
	background(175);
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].display();
	}
}

function mousePressed() {
	// When mouse is pressed, we must check each button
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].click(mouseX, mouseY);
	}
}