// what value does this start at? 0 or undefined? It's undefined
let savedTime;
let totalTime = 5000;

function setup() {
	createCanvas(200, 200);
	// background in setup
	background(0);
	// starts around 500 - time for page to load?
	savedTime = millis();
}

function draw() {
	// calculate how much time has passed
	let passedTime = millis() - savedTime;
	//console.log(passedTime)
	if (passedTime > totalTime) {
		console.log('5 seconds have passed!');
		background(random(255));
		savedTime = millis(); // Save the current time to restart timer
	}
}