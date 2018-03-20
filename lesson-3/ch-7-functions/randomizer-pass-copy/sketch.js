function setup() {
	createCanvas(windowWidth, windowHeight);
	var num = 10;
	print("The number is: " + num);
	randomizer(num);
	print("The number is: " + num);
}

function draw() {

}

function randomizer(newnum) {
	newnum = newnum + random(-2, 2);
	print("The new number is: " + newnum);
}