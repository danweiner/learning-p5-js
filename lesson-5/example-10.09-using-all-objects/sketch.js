// I can't run this example without adding classes, but I don't want to do that

let catcher;
let timer;
let drops;

let totalDrops = 0;

function setup() {
	createCanvas(400, 400);

	catcher = new Catcher(32); // create the catcher w = 32
	drops = new Array(1000); // create 1000 spots in the array
	timer = new Timer(2000); // timer goes off every two secs

	timer.start();
}

function draw() {
	background(255);

	catcher.setLocation(mouseX, mouseY); //set catcher location
	catcher.display();

	// check the timer
	if (timer.isFinished()) {
		console.log('2 seconds have passed');
		timer.start();
	}

	// deal with raindrops
	// initialize one drop
	drops[totalDrops] = new Drop();

	totalDrops++;

	if (totalDrops >= drops.length) {
		totalDrops = 0; // start over
	}

	// Move and display all drops
	for (let i = 0; i < totalDrops; i++) {
		drops[i].move();
		drops[i].display();
	}
}