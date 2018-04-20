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