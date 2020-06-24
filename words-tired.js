let font;

function preload() {
  font = loadFont("./Dunford moore Italic.ttf");
}

function setup() {
  createCanvas(500, 500);
  frameRate(1);
  textFont(font);
  textSize(60);
  textAlign(CENTER, CENTER);
}

const palettes = ["#3d1f19", "#805642", "#a37968", "#d49e7f", "#e3c3b7"];

function draw() {
  background("#f2f4e6");

  const centerX = width / 2;
  const centerY = height / 2;

  for (let i = 0; i < 5; i++) {
    const moveY = map(i, 0, 4, -150, 150);

    fill(palettes[i] || "black");

    text("Im. Tired.", centerX, centerY + moveY);
  }
}
