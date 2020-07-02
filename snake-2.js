const numOfLinks = 20;
const list = new Array(numOfLinks).fill(null);
const size = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  list.forEach((item, index) => {
    if (!item) return;

    circle(item.x, item.y, size + (size - index) * 2);
  });
}

function mouseMoved() {
  if (list.length === size) list.pop();

  const pos = {
    x: mouseX,
    y: mouseY,
  };

  list.unshift(pos);
}
