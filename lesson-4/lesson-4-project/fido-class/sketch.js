let fido;

function setup() {
	createCanvas(600, 600);
	// x, y, w, h, xspeed, yspeed
	fido = new Fido(10, 0, 200, 240, .5, 0);
}

function draw() {
	fido.display();
	fido.move();
}

