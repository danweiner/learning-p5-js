let randoms = new Array(4);
let index = 0; // which number we are using

function setup() {
	createCanvas(200, 200);
	for (var i = 0; i < randoms.length; i++) {
		randoms[i] = random(0, 256);
	}
	frameRate(1);
}

function draw() {
	// Every frame we access one element of the array
	background(randoms[index]);
	index = (index + 1) % randoms.length;

}