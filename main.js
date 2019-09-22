var numStars = 1000;
var stars = [];
var speed;

function setup(){
  createCanvas(1920, 1075);

  for (var i = 0; i < numStars; i++) {
    stars.push(new Star);
  }
}

function draw() {
  background(0);
  translate(width/2, height/2);

  speed = map(mouseX, 0, width, 5, 100);

  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
