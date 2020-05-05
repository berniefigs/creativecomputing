

function setup() {
 createCanvas(2000, 530);
  hue = 0;
  noStroke();
}

function mouseDragged() {
  let r = random(255);
  var g = random(255);
  let b = random(255);

  fill(r, g, b);
  ellipse(mouseX, mouseY, 40, 40);
}

