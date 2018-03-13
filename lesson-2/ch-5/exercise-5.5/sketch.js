var r = {
	x: 50,
	y: 50,
	w: 100,
	h: 75,
	f: 0
}

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(0);

	stroke(255);
	// if (mouseX > r.x && mouseY > r.y && 
	// 	mouseX < r.x + r.w && mouseY < r.y + r.h) {
	// 	fill(255, 0, 200);
	// } else {
	// 	fill(r.f);
	// }

	var dx = dist(r.x, r.y, r.x + r.w, r.y);
	var dy = dist(r.x, r.y, r.x, r.y + r.h);
	if (mouseX > r.x && mouseX < r.x + dx 
		&& mouseY > r.y && mouseY < r.y + dy) {
		fill(255, 0, 200);
	} else {
		fill(0);
	}
	rect(r.x, r.y, r.w, r.h);

}