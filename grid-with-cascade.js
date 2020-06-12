const height = 500
const width = 500
const numCols = 4;
const numRows = 4;
const numLayers = 20;
const margin = 75;
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

  for (let layer = 0; layer < numLayers; layer++) {
    drawGrid((col, row) => {
      const values = getValues(col, row);

      stroke('blue')
      strokeWeight(1)

      rect(
        values.x + (layer * 2),
        values.y + (layer * 2),
        values.size,
        values.size
      )

      if (layer === numLayers - 1) {
        stroke('blue')
        fill('white')
        circle(
          values.x + (layer * 2) + (squareLength / 2),
          values.y + (layer * 2) + (squareLength / 2),
          values.size * 0.9
        )
      }
    })
  }
}
