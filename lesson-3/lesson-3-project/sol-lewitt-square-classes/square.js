class Square {
  constructor(r, w, c) {
    this.r = r;
    this.w = w;
    this.c = c;
  }

  drawOuter() {
    fill(255);
    for (let i = this.w; i < height; i += this.w*2) {
        rect(this.w, i, width - this.w * 2, this.w);
    }
  }

  drawInner() {
    fill(this.c);
    rect(50, 40, 250, 270)
    fill(255);
    for (let i = 60; i < 300; i += this.w*2) {
      rect(i, 50, this.w, 250);
    }
  }
}
