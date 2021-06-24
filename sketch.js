var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var health;
var lBlast
var attack;
var position;

var player1score =0;
var player2score =0;

var player1Health = 300;
var player2Health = 300;

function preload() {
  BGimg = loadImage("Bg.png");
  lucarioAttack = loadAnimation("lucarioRanged.png");
  lucarioRangedLeft = loadAnimation("lucarioRangedLeft.png");
  lucarioStanding = loadAnimation("LucarioStanding.png");
  lucarioRunning = loadAnimation("LucarioRunning.png");
  lucarioRunningLeft = loadAnimation("LucarioRunningLeft.png");
  lucarioBlastImg = loadAnimation("lucarioBlastImg.png");
  lucarioClose = loadAnimation("lucarioClose.png");
  lucarioCloseLeft = loadAnimation("lucarioCloseLeft.png")

  greninjaRanged = loadAnimation("greninjaRanged.png");
  greninjaRangedRight = loadAnimation("greninjaRangedRight.png");
  greninjaStanding = loadAnimation("greninjaStanding.png");
  greninjaRunning = loadAnimation("greninjaRunning.png");
  greninjaRunningRight = loadAnimation("greninjaRunningRight.png");
  greninjaBlastImg = loadAnimation("greninjaBlast.png");
  greninjaClose = loadAnimation("greninjaClose.png");
  greninjaCloseLeft = loadAnimation("greninjaCloseLeft.png");
}
function setup() {
  createCanvas(1750, 700);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  invisibleGround1 = createSprite(590,220,245,10);
  //invisibleGround1.visible = true;

  invisibleGround2 = createSprite(875,105,245,10);
  //invisibleGround2.visible = false;

  invisibleGround3 = createSprite(875,340,1080,10);
  //invisibleGround3.visible = false;
  
  invisibleGround4 = createSprite(1160,220,250,10);
  //invisibleGround4.visible = false;
  
}

function draw() {
  background(0);
  
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
   
}