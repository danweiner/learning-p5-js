var side = 20;
var x = 0;
var y = 0;

function setup() {
	createCanvas(300, 300);
}

function draw() {
	background(255);
	for (var y = 0; y < height; y += side) {
		for(x = 0; x < width; x += side){
			noStroke();
			if ((x + y) % (side * 2) == 0) {
				fill(0);
			} else {
				fill(255)
			}
			
			rect(x, y, side, side);
		}
	}

}