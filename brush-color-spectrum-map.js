const CANVAS_SIZE = 500;
const HSB_RANGE = 360;
const SIZE = 50;

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
}

function draw() {
  noStroke()
  colorMode(HSB);

  for (var i = 0; i < SIZE; i++) {
    for (var j = 0; j < SIZE; j++) {
      const fillRed = map(
        mouseX + i,
        0,
        CANVAS_SIZE,
        0,
        HSB_RANGE
      )

      fill(fillRed, 100, 100)
      rect(mouseX + i, mouseY + j, 1, 1)
    }
  }
}
