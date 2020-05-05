function setup() {
 createCanvas(1000, 2000);

 background(255,1000);
}

function draw() {
  if (mouseIsPressed) {
    fill(255);
  } ;
  ellipse(mouseX, mouseY, 80, 80);
}