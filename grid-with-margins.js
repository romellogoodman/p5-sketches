const height = 400
const width = 400
const numCols = 4;
const numRows = 4;
const margin = 25;
const squareLength = (width - 2 * margin) / numCols

function setup() {
  createCanvas(height, width);
  frameRate(5)
}

function getValues(colNumber, rowNumber) {
  const size = ((height * 2 - margin) / numRows)
  let x = margin + colNumber * squareLength;
  let y = margin + rowNumber * squareLength;

  return {
    x,
    y,
    size: squareLength
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
  background(255);

  drawGrid((col, row) => {
    stroke('black')
    strokeWeight(1)
    fill('white')
    rect(
      height / numRows * row,
      width / numCols * col,
      height / numRows,
      width / numRows
    )
  })

  drawGrid((col, row) => {
    const values = getValues(col, row);

    noFill()
    stroke('red')
    strokeWeight(2)
    rect(values.x, values.y, values.size, values.size)

    stroke('pink')
    fill('white')
    circle(
      values.x + (squareLength / 2),
      values.y + (squareLength / 2),
      values.size * 0.9
    )
  })
}
