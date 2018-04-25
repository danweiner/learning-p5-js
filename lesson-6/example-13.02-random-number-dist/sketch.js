// An array to keep track of how often random nums are picked
let randomCounts;

function setup() {
	createCanvas(200, 200);
	randomCounts = new Array(20);
	// I think we need to do this bc we need to fill the array with 0's
	for (let i = 0; i < randomCounts.length; i++) {
		randomCounts[i] = 0;
	}
}

function draw() {
	background(255);

	// pick a random number and increase the count
	let index = int(random(randomCounts.length));
	randomCounts[index]++;

	// Draw a rectangle to graph results
	stroke(0);
	fill(175);
	for (let i = 0; i < randomCounts.length; i++) {
		rect(i*10, 0, 9, randomCounts[i]);
	}
}