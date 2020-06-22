let font
let fontSize = 70
let word = "O"

function preload() {
  font = loadFont('./Raleway-Black.ttf')
}

function setup() {
  createCanvas(400, 400)
  textAlign(CENTER, CENTER)
  textSize(fontSize)
  textFont(font)
  noStroke()
  frameRate(60)
}

const drawLetters = (margin) => {
  const moduloHeight = frameCount % (height - margin)
  const moduloWidth = frameCount % (width - margin)

  // top ->
  fill(0, 255, 255, 180)
  text(word, moduloWidth, 0 + margin)
  // bottom <-
  fill(255, 0, 255, 180)
  text(word, width - moduloWidth, height - margin)
  // left v
  fill(255, 255, 0, 180)
  text(word, width - margin, moduloHeight)
  // right ^
  fill(0, 0, 0, 180)
  text(word, 0 + margin, height - moduloHeight)
}

function draw() {
  background('#fefefe')
  drawLetters(0)
  drawLetters(50)
  drawLetters(100)
  drawLetters(150)
}
