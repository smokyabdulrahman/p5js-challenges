
let x, y;
let xSpeed, ySpeed;
let cdLogo;
let logoWidth = 100, logoHeight = 40;

function preload() {
  cdLogo = loadImage('cdlogo.png');
}
function setup() {
  createCanvas(1200,1000);
  x = random(0, width - logoWidth); y = random(0, height - logoHeight);
  xSpeed = ySpeed = 5;
}

function draw() {
  checkBoundries();
  background(255);
  x += xSpeed; y+= ySpeed;
  image(cdLogo, x, y, 100, 40)
}

function checkBoundries() {
  if (x > width - logoWidth) {
    xSpeed = -xSpeed;
  }

  if (x <= 0) {
    xSpeed = -xSpeed;
  }

  if (y > height - logoHeight) {
    ySpeed = -ySpeed;
  }

  if (y <= 0) {
    ySpeed = -ySpeed;
  }
}