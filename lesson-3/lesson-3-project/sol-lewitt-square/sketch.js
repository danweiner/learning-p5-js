const NUMROWS = 17;
const ROWWIDTH = 10;
const INNERROW = 12;

function setup() {
  createCanvas(350, 350);
}

function draw() {
  background(0);
  noStroke();
  drawBigRect();
  drawInnerRect();
}

function drawBigRect(){
  fill(255);
  for (var i = ROWWIDTH; i < height; i += ROWWIDTH*2) {
    rect(ROWWIDTH, i, width - ROWWIDTH * 2, ROWWIDTH);
  }
}

function drawInnerRect() {
  fill(0);
  rect(50, 50, 250, 250)
  fill(255);
  for (var i = 60; i < 300; i += ROWWIDTH*2) {
    rect(i, 50, ROWWIDTH, 250);
  }
}