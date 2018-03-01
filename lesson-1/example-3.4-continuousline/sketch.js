function setup() { 
  createCanvas(400, 640);
  //background moved from draw to setup
  background(255);
  smooth();
} 

function draw() {
  stroke(0);
  //draw a line from the previous mouse location
  //to the current mouse location
  line(pmouseX, pmouseY, mouseX, mouseY);
  
}