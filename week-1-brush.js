const RGB_RANGE = 255;
const SIZE = 25;

function setup() {
  createCanvas(RGB_RANGE, RGB_RANGE);
  
}

function coordToRGB(coord) {
  return Math.ceil((coord / RGB_RANGE) * RGB_RANGE)
}

function draw() {
  noStroke()
  
  for (var i = 0; i < SIZE; i++) {
    fill(coordToRGB(mouseX + i), coordToRGB(mouseY + i), 255)
    rect(mouseX + i, mouseY, 1, SIZE) 
  }
}
