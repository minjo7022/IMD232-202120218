let mover;
let gravity;
let isDragging = false;
let dragStart;
let dragEnd;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  mover = new Mover(width / 2, height / 2, 50);
  gravity = createVector(0, 0.8);
  dragStart = createVector();
  dragEnd = createVector();
}

function draw() {
  background(255);

  let gravityForce = createVector(gravity.x, gravity.y);
  gravityForce.mult(mover.mass);
  mover.applyForce(gravityForce);
  //   mover.addAcc(gravity);
  //   if(mouseIsPressed && isMouseInsideCanvas)
  //   mover.addAcc(wind)

  if (isDragging) {
    dragEnd.set(mouseX, mouseY);
    let dragForce = p5.Vector.sub(dragEnd, dragStart);
    dragForce.mult(3);
    mover.applyForce(dragForce);
    dragStart.set(dragEnd);
  }

  mover.update();
  mover.checkEdges();
  mover.display();
}

function mousePressed() {
  isDragging = true;
  dragStart.set(mouseX, mouseY);
}

function mouseReleased() {
  isDragging = false;
}
