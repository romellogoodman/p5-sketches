const height = 400
const width = 400
const maxFrameCount = 100;
let numberOfCubes = 1;
let angle = 0;

function setup() {
  createCanvas(height, width, WEBGL);
  frameRate(60)
}

function draw() {
  noFill()
  background(0);
  stroke("white")
  strokeWeight(1.5)

  let round = frameCount % 100;
  let inc = TWO_PI / round;
  let h = map(sin(angle), -1, 1, 0, 100);

  box(h);
  angle += 0.1;
}
