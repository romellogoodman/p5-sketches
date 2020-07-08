let font;
let fontSize = 250;
let stretchLength = 30;
let text = "ABC";
let points = [];

function preload() {
  font = loadFont("./VarsityTeam-Bold.otf");
}

function setup() {
  createCanvas(500, 500);
  stroke(255);
  strokeWeight(2);

  // Load a piece of text as points
  points = font.textToPoints(text, 0, 0, fontSize, {
    sampleFactor: 0.1,
  });
}

function draw() {
  background(173, 237, 173);
  translate(0, 0);
  let boundBox = font.textBounds(text, 0, 0, fontSize);

  rect(boundBox.x, boundBox.y, boundBox.w, boundBox.h);

  translate(boundBox.w / 16, boundBox.h * 2);

  for (let pt of points) {
    let extrudedPt = {
      x: pt.x + stretchLength + frameCount,
      y: pt.y - stretchLength - frameCount,
    };

    fill(255, 100);
    stroke(255, 100);
    line(pt.x, pt.y, extrudedPt.x, extrudedPt.y);
    ellipse(extrudedPt.x, extrudedPt.y, 3);

    // Draw the normal point
    fill(255);
    stroke(255);
    ellipse(pt.x, pt.y, 3);
  }
}
