const HSB_RANGE = 360;
const SIZE = 25;

function setup() {
  createCanvas(HSB_RANGE, HSB_RANGE);
}

function draw() {
  noStroke()
  colorMode(HSB);
  
  for (var i = 0; i < SIZE; i++) {
    for (var j = 0; j < SIZE; j++) {
      fill(mouseX + i, 100, 100)
      rect(mouseX + i, mouseY + j, 1, 1) 
    }
  }
}
