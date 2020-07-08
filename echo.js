// ???
const maxFrames = 314;
const numbEchos = 15;
const list = new Array(numbEchos).fill(null);

function addEcho(x, y) {
  if (list.length === numbEchos) list.shift();

  const pos = {
    x,
    y,
  };

  list.push(pos);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(96);
  textAlign(CENTER, CENTER);
  fill("black");
  stroke("white");
  strokeWeight(4);
}

function draw() {
  background(0);

  // Glitch the frames
  if (frameCount % (maxFrames / 2 + numbEchos) < maxFrames / 2) {
    // Cut frames in half
    if (frameCount % 2 === 0) {
      // sin(frequency) * amplitude
      x = sin(frameCount / 25) * 100;
      y = cos(frameCount / 50) * 200;

      addEcho(width / 2 + x, height / 2 + y);
    }
  } else {
    list.shift();
  }

  list.forEach((item, index) => {
    if (!item) return;

    text("echo", item.x, item.y);
  });
}
