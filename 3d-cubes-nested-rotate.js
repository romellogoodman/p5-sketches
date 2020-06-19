const height = 400
const width = 400

function setup() {
  createCanvas(height, width, WEBGL);
  frameRate(60)
}

function draw() {
  noFill()
  background(0);
  stroke("white")
  strokeWeight(1.5)
  
  const numberOfCubes = 5;
  const cubeSize = 20;
  const stepSize = 40;
  
  for(let i = 1; i <= numberOfCubes; i++) {
    box(cubeSize + ((i - 1) * stepSize));
    rotateX(frameCount * 0.001);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.0001);
  }
}
