function setup() {
  createCanvas(400, 400);
  frameRate(10)
}

const numColumns = 10;
const numRows = 10;

function draw() {
  background(220);
  // noStroke();

  for (let col = 0; col < numColumns; col++) {
    for (let row = 0; row < numRows; row++) {
      const sqHeight = height / numRows;
      const sqWidth = width / numColumns;

      fill('white')
      rect(sqWidth * col, sqHeight * row, sqWidth, sqHeight)
      circle(
        (sqWidth * col) + (sqWidth / 2),
        (sqHeight * row) + (sqHeight / 2),
        sqWidth * 0.9,
        sqHeight * 0.9
      )
    }
  }
}
