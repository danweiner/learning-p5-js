function setup() {
	createCanvas(200,200);
	frameRate(30);
}

function draw() {
	background(100);
	stroke(255);
  
  // rect gets lighter
	fill(frameCount/2);
	rectMode(CENTER);
  
  //rect gets bigger but stays in middle of canvas
	rect(width/2,height/2,mouseX + 10,mouseY + 10);
}
function keyPressed() {
	print(key)
}