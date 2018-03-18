function setup() { 
  createCanvas(400, 640);
  
  //remember background must be in setup!
  //draw the daytime sky
  background(66, 134, 244);
  
  //draw sun
  noStroke();
  fill(255, 255, 0);
  ellipse(3*width/4, height/4, 35, 35);
  
} 

function draw() { 
  
  
  rectMode(CENTER);
  ellipseMode(CENTER);

  translate(width/2, height/2);
  
  //draw the grass
  noStroke();
  fill(0, 255, 0);
  rect(0, 2 * height/5, width, height/4);
  
  //draw the chimney
  stroke(0);
  fill(255, 0, 0);
  rect(90, 110, 20, 200);
  
  //draw the main house structure
  stroke(0);
  fill(255);
  rect(0, height/4, 200, 150);

  // draw lines on house
  for (var i = 0; i < height/4; i += 20) {
    line(-width/4, height/8 + i, width/4, height/8 + i)
  }
  
  //draw the roof
  stroke(0);
  fill(0);
  quad(-(width/4 + 30), height/4 - 40, 
       -70, height/4 - 125, 
       70, height/4 - 125, 
       width/4 + 30, height/4 - 40 );
  
  //windows
  stroke(0);
  fill(255);
  rect(-40, height/4 - 15, 35, 35);
  
  stroke(0);
  fill(255);
  rect(40, height/4 - 15, 35, 35);
  
  //right window lines
  line(40 - 17, height/4 - 15, 
       40 + 18, height/4 - 15);
  line(40, height/4 - 32, 
       40, height/4 + 2);
  
  //left window lines
  line(- 40 - 17, height/4 - 15, 
       - 40 + 18, height/4 - 15);
  line(- 40, height/4 - 32, 
       - 40, height/4 + 2);
  
  //door
  
  stroke(0);
  fill(255, 0, 0);
  rect(0, height/4 + 55, 25, 40);
  
  // //doorknob
  
  stroke(0);
  fill(244, 187, 65);
  ellipse(- 5, height/4 + 55, 7, 7);
  
  
}

function mousePressed() {
	background(15, 24, 89);
 
 
  
   //draw moon
  noStroke();
  fill(255);
  ellipse(width/4, -height/4, 35, 35);
  
  // draw orion
  stroke(255);
  beginShape(POINTS);
  vertex(-width/4, - 3 * height / 10);
  vertex(-width/4 + 50, - 3 * height / 10 - 20);
  vertex(-width/4 + 80,- 3 * height / 10 + 10);
	vertex(-width/4 + 20, - 3 * height / 10 + 70);
  vertex(-width/4 + 40, - 3 * height / 10 + 65);
  vertex(-width/4 + 60,- 3 * height / 10 + 60);
  vertex(-width/4 + 10, - 3 * height / 10 + 150);
  vertex(-width/4 + 100, - 3 * height / 10 + 130);
  endShape();
}
