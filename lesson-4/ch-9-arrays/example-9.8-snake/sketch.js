let xpos = new Array(50).fill(0);
let ypos = new Array(50).fill(0);

function setup() {
	createCanvas(200, 200);
	//xpos.fill(0);
	//ypos.fill(0);
}

function draw() {
	background(255);

	// shift array values
	for (let i = 0; i < xpos.length-1; i++) {
		xpos[i] = xpos[i+1];
		ypos[i] = ypos[i+1];
	}

	// new location
	xpos[xpos.length - 1] = mouseX;
	ypos[ypos.length - 1] = mouseY;

	// draw everything
	for (let i = 0; i < xpos.length; i++) {
		noStroke();
		fill(255 -i*5);
		ellipse(xpos[i], ypos[i], i, i);
	}

}