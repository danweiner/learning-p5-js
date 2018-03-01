function draw() {
  //the code in the book says stroke(255)
  //this can't be right - this would be 
  //a white line on a white background
  stroke(0);
  //faster movement, wider drawing
  strokeWeight(abs( mouseX - pmouseX))
  line(pmouseX, pmouseY, mouseX, mouseY);
  
}

//Dan's code also has stroke(0)
//his code has abs(pmouseX-mouseX) instead
//of mouseX-pmouseX but both work

// function setup() {
//   createCanvas(480, 640);
//   background(255);
// }

// function draw() {
//   stroke(0);
//   strokeWeight(abs(pmouseX - mouseX));
//   line(pmouseX, pmouseY, mouseX, mouseY);
// }