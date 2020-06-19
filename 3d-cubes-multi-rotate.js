const canvasSize = 500;
const numRowsCols = 4;
const margin = 25;
const squareLength = 25;

function setup() {
  createCanvas(canvasSize, canvasSize, WEBGL);
  frameRate(60);
}

function drawGrid(draw) {
  for (let col = 1; col <= numRowsCols; col++) {
    for (let row = 1; row <= numRowsCols; row++) {
      draw(col, row);
    }
  }
}

const getXY = (col, row) => {
  return {
    x: 0 - canvasSize / 2 + (canvasSize / numRowsCols - margin) * col,
    y: 0 - canvasSize / 2 + (canvasSize / numRowsCols - margin) * row,
  };
};

function draw() {
  noFill();
  background(0);
  stroke("white");
  strokeWeight(1.5);

  drawGrid((col, row) => {
    const pos = getXY(col, row);

    push();
    translate(pos.x, pos.y, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(squareLength);
    pop();
  });
}
