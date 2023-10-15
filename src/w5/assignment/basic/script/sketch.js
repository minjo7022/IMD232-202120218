const stripeNum = 8;
const stripeNum2 = 8;
const stripeBegin = 15;
const stripeGap = 15;

function setup() {
  createCanvas(400, 400);
  setCanvasContainer('canvas', 1, 1, true);

  background(255);
}
function draw() {
  background(255);

  noStroke();

  // fill('salmon');
  // for (let a = 0; a < stripeNum; a++) {
  //   const rectWidth = width / (stripeNum + stripeNum + 1);
  //   const rectX = (width / (stripeNum + stripeNum + 1)) * (2 * a + 1);
  //   rect(rectX, 0, rectWidth, height);
  // }
  // for (let a = 0; a < stripeNum; a++) {
  //   const rectHeight = height / (stripeNum + stripeNum + 1);
  //   const rectY = (height / (stripeNum + stripeNum + 1)) * (2 * a + 1);
  //   rect(0, rectY, width, rectHeight);
  // }

  rectMode(CENTER);
  for (let a = 0; a < stripeNum; a++) {
    for (let b = 0; b < stripeNum2; b++) {
      fill((225 / stripeNum) * a, (255 / stripeNum2) * b, 255);
      let x = ((a + 1) * width) / (stripeNum + 1);
      let y = ((b + 1) * height) / (stripeNum2 + 1);
      ellipse(x, y, 30);
      //   if (b % 2 == 0) {
      //     fill(255, 255, 0);
      //   } else {
      //     fill(255, 0, 0);
      //   }
      //   //   if (a % 2 == 0) {
      //     fill(0, 0, 255);
      //   } else {
      //     fill(0, 255, 0);
      //   }
    }
  }

  // for (let a = stripeBegin; a < width; a += 2 * stripeGap) {
  //   rect(a, 0, stripeGap, height);
  // }
}
