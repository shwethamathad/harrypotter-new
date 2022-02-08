var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, hp1, hp2;
var hps= [];

function preload() {
  backgroundImage = loadImage("./assets/bg.jpg");
  hp1_img = loadImage("../assets/hp1.png");
  hp2_img = loadImage("../assets/hp2.png");
  track = loadImage("../assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
