/**
 * Inspired by Mary Ellen Solt, ZigZag
 * https://i.pinimg.com/originals/00/54/9b/00549b08dfef7ce15dbcc350119907c2.jpg
 */
const height = 600
const width = 600
const numColsRows = 26;
const margin = 25;
const squareLength = (width - 2 * margin) / numColsRows

function setup() {
  createCanvas(height, width);
  frameRate(1)
}

function drawGrid(draw) {
  for (let row = 0; row < numColsRows; row++) {
    for (let col = 0; col < numColsRows; col++) {
      const newCol = col === 0;

      draw(col, row, newCol);
    }
  }
}


function getGridValues(colNumber, rowNumber) {
  const size = ((height * 2 - margin) / numColsRows)
  let x = margin + colNumber * squareLength;
  let y = margin + rowNumber * squareLength;

  return {
    x,
    y,
    size: squareLength
  };
}

const borderGrey = 'lightgrey';
const zigzagColors = [
  'white',
  'darkgrey',
  'white',
  'black',
  'black',
  'black',
  'black',
  'black',
  'black',
  'white',
  'darkgrey',
  'white'
];

const getColor = (col, row) => {
  let startIndex = null;

  // Doubling the modulo allows us to check what direction we are going
  if (row % (5 * 2) < 5) {
    startIndex = 4 - (row % 5)
  } else if (row % 5 < 5) {
    startIndex = (row % 5)
  }

  const endIndex = startIndex + zigzagColors.length - 1


  // Are we before or after the pattern
  if (col < startIndex || col > endIndex) {
    return borderGrey
  }

  const patternIndex = col - startIndex

  return zigzagColors[patternIndex]
}

function draw() {
  background(255);

  let lastRow = null;

  drawGrid((col, row, newCol) => {
    const grid = getGridValues(col, row);
    let fillColor = 'black';

    // First and Last Rows
    if (row === 0 || row === numColsRows - 1) {
      fillColor = borderGrey
      // Left & Right Columns outside of the zigzag region
    } else if (col < 5 || col > numColsRows - 6) {
      fillColor = borderGrey
    } else {
      // Compute the col and row for the zigzag region
      const zigCol = col - 5;
      const zigRow = row - 1;
      const color = getColor(zigCol, zigRow)

      if (color) {
        fillColor = color
      }
    }

    // DEBUG: toggle the grid
    // noFill()
    // strokeWeight(1.5)
    // strokeWeight(2)
    // rect(grid.x, grid.y, grid.size, grid.size)
    // stroke('black')

    fill(fillColor)
    textAlign(CENTER, TOP);
    textSize(16);
    textStyle(BOLD);
    text('z', grid.x + 6, grid.y);
  })
}
