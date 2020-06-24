const height = 400;
const width = 400;
const numCols = 3;
const numRows = 3;
const margin = 25;

let squareWidth = (width - 2 * margin) / numCols;
let squareHeight = (width - 2 * margin) / numRows;
// let maxShift = squareWidth / 6

function setup() {
  createCanvas(height, width);
  frameRate(5);
}

function getValues(colNumber, rowNumber) {
  const size = (height * 2 - margin) / numRows;
  let x = margin + colNumber * squareWidth;
  let y = margin + rowNumber * squareHeight;

  return {
    x,
    y,
  };
}

function drawGrid(draw) {
  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows; row++) {
      draw(col, row);
    }
  }
}

function draw() {
  background(0, 0, 255);

  for (let i = 0; i < 5; i++) {
    drawGrid((col, row) => {
      const values = getValues(col, row);
      const offset = map(i, 0, 4, -15, 15);

      noFill();
      // stroke(offset === 0 ? 'red' : 'white')
      stroke("white");
      strokeWeight(2);
      rect(
        values.x + offset,
        values.y + offset,
        squareWidth * 0.6,
        squareHeight * 0.6
      );
    });
  }
}
