const canvasSize = 500;
const webGLCanvasSize = canvasSize / 2;
const windowWidth = 200;
const windowHeight = 150;
let posX = null;
let posY = null;
let img;

function preload() {
  img = loadImage('/bliss.jpg');
}


function setup() {
  createCanvas(canvasSize, canvasSize, WEBGL);
  background(0);
  image(img, -webGLCanvasSize, -webGLCanvasSize);

  posX = 0
  posY = 0
}

function draw() {
  rect(
    posX - (windowWidth / 2),
    posY - (windowHeight / 2),
    windowWidth,
    windowHeight
  )

  push();
  strokeWeight(2)
  translate(posX, posY, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(40);
  pop();
}

function mouseDragged() {
  posX = map(mouseX, 0, canvasSize, -webGLCanvasSize, webGLCanvasSize)
  posY = map(mouseY, 0, canvasSize, -webGLCanvasSize, webGLCanvasSize)
}
