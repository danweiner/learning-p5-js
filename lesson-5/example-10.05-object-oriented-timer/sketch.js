let timer;

function setup() {
	createCanvas(200, 200);
	background(0);
	timer = new Timer(5000);
	timer.start();
}

function draw() {
	if (timer.isFinished()) {
		background(random(255));
		timer.start();
	}
}

class Timer {
	constructor(totalTime) {
		this.totalTime = totalTime;
	}

	start() {
		this.savedTime = millis();
	}

	isFinished() {
		let passedTime = millis() - this.savedTime;
		if (passedTime > this.totalTime) {
			return true;
		} else {
			return false;
		}
	}

}