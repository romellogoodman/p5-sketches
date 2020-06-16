/**
 * Conway's Game of Life
 * https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
 */
const height = 400
const width = 400
const numCols = 10;
const numRows = 10;
const margin = 25;
const squareLength = (width - 2 * margin) / numCols

function setup() {
  createCanvas(height, width);
  frameRate(1)
}

function getGridValues(colNumber, rowNumber) {
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

const STATE_DEAD = 0;
const STATE_LIVE = 1;

// Build a grid col x row size
const buildConway = (randomFunc) => {
  let grid = new Array(numCols).fill(null)

  grid = grid.map(() => {
    return new Array(numRows).fill(null).map(item => {
      return randomFunc([STATE_DEAD, STATE_LIVE])
    });
  })

  return grid;
}

const checkSquare = (col, row, grid) => {
  return grid[col] && grid[col][row] ? grid[col][row] : 0
}

const checkConway = (col, row, grid) => {
  const current = grid[col][row];
  const left = checkSquare(col - 1, row, grid);
  const right = checkSquare(col + 1, row, grid);
  const aboveLeft = checkSquare(col - 1, row - 1, grid);
  const aboveMiddle = checkSquare(col, row - 1, grid);
  const aboveRight = checkSquare(col + 1, row - 1, grid);
  const belowLeft = checkSquare(col - 1, row - 1, grid);
  const belowMiddle = checkSquare(col, row - 1, grid);
  const belowRight = checkSquare(col + 1, row - 1, grid);
  const sum =
    left +
    right +
    aboveLeft +
    aboveMiddle +
    aboveRight +
    belowLeft +
    belowMiddle +
    belowRight

  console.log('sum', sum)

  if (current === STATE_DEAD) {
    // Any dead cell with three live neighbours becomes a live cell.
    if (sum === 3) {
      return STATE_LIVE;
    }
    
    return STATE_DEAD;
  }
  
  // Any live cell with two or three live neighbours survives.
  if (sum === 2 || sum === 3) {
    return STATE_LIVE;
  }
  
  // All other live cells die in the next generation. Similarly, all other dead cells stay dead.
  return STATE_DEAD;
}

const updateConway = grid => {
  return grid.map((col, colIndex) => {
    return col.map((row, rowIndex) => {
      return checkConway(colIndex, rowIndex, grid)
    })
  })
}

const getConwayStroke = state => {
  switch (state) {
    case STATE_DEAD:
      return 'white'
      // return 'pink'
    case STATE_LIVE:
      return 'lightgreen'
    default:
      return 'grey'
  }
}

let conway = null;

function draw() {
  background(255);

  conway = conway ? conway : buildConway(random);

  drawGrid((col, row) => {
    const values = getGridValues(col, row);
    const conwayState = conway[col][row];
    const strokeColor = getConwayStroke(conwayState)

    noFill()

    stroke(strokeColor)
    strokeWeight(1.5)
    // fill('white')
    circle(
      values.x + (squareLength / 2),
      values.y + (squareLength / 2),
      values.size * 0.8
    )

    stroke('lightgrey')
    strokeWeight(0.5)
    rect(values.x, values.y, values.size, values.size)

  })

  conway = updateConway(conway);
}
