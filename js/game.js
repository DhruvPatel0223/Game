class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(590, 160);
    player1.addAnimation("player1", lucarioStanding); 
  player1.addAnimation("RunningRight", lucarioRunning);
  player1.addAnimation("RunningLeft", lucarioRunningLeft); 
  player1.addAnimation("closeAttack", lucarioClose);
  player1.addAnimation("closeLeft", lucarioCloseLeft);
  player1.addAnimation("rangedRight", lucarioAttack);
  player1.addAnimation("rangedLeft", lucarioRangedLeft);
  player1.scale = 0.10 ;
  lBlast = createSprite(600, 300);
  lBlast.addAnimation("blast", lucarioBlastImg);
  lBlast.scale = 0.10;
  lBlast.visible = false;
    player2 = createSprite(1160, 160);
    player2.addAnimation("standing", greninjaStanding);
    player2.addAnimation("runningRight", greninjaRunningRight);
    player2.addAnimation("runningLeft", greninjaRunning);
    player2.addAnimation("closeAttack", greninjaClose);
    player2.addAnimation("closeAttackLeft", greninjaCloseLeft);
    player2.addAnimation("ranged", greninjaRanged);
    player2.addAnimation("rangedRight", greninjaRangedRight);
    player2.scale = 1;
    players=[player1,player2];
    
        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                //Attack.getAttackInfo();
                
                image(BGimg, 0,0, 1750, 700);

                 var x =875;
                 var y=340;
                 var score = 0;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 875-allPlayers[plr].distance;
                     y=300-allPlayers[plr].distancey;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                         textSize(25);
                         fill("black");
                         text("Player 1 :" +allPlayers.player1.score,50,50);
                        text("Player 2 :" + allPlayers.player2.score, 50, 100);
                        text("Player 2 Health :" +allPlayers.player1.health,300,50);
                        text("Player 1 Health :" + allPlayers.player2.health, 300, 100);
                        
                 }
                
                
                 

                if (keyDown(RIGHT_ARROW) && player.index === 1) {
                    player.distance -= 10
                    player.update();
                    player1.changeAnimation("RunningRight", lucarioRunning);
                    player1.scale = 0.15;
                    /*player2.changeAnimation("runningRight", greninjaRunningRight);
                    player2.scale = 0.15;*/
                }else{
                    player1.changeAnimation("player1", lucarioStanding);
                    player1.scale = 0.10;
                    /*player2.changeAnimation("standing", greninjaStanding);
                    player2.scale = 0.15 ;*/
                  }
                  if (keyDown(LEFT_ARROW) && player.index === 1) {
                    player.distance += 10
                    player.update();
                    player1.changeAnimation("RunningLeft", lucarioRunningLeft);
                    player1.scale = 0.15;
                    /*player2.changeAnimation("runningLeft", greninjaRunning);
                    player2.scale = 0.15;*/
                }/*else{
                    player1.changeAnimation("player1", lucarioStanding);
                    player1.scale = 0.10;
                    /*player2.changeAnimation("standing", greninjaStanding);
                    player2.scale = 0.15 ;
                  }*/
                  if (keyDown(RIGHT_ARROW) && player.index === 2) {
                    player.distance -= 10
                    player.update();
                    /*player2.changeAnimation("RunningRight", lucarioRunning);
                    player2.scale = 0.15;*/
                    player2.changeAnimation("runningRight", greninjaRunningRight);
                    player2.scale = 0.15;
                }else{
                    /*player1.changeAnimation("player1", lucarioStanding);
                    player1.scale = 0.10;*/
                    player2.changeAnimation("standing", greninjaStanding);
                    player2.scale = 0.15 ;
                  }
                  if (keyDown(LEFT_ARROW) && player.index === 2) {
                    player.distance += 10
                    player.update();
                    /*player2.changeAnimation("RunningLeft", lucarioRunningLeft);
                    player2.scale = 0.15;*/
                    player2.changeAnimation("runningLeft", greninjaRunning);
                    player2.scale = 0.15;
                }/*else{
                    /*player1.changeAnimation("player1", lucarioStanding);
                    player1.scale = 0.10;
                    player2.changeAnimation("standing", greninjaStanding);
                    player2.scale = 0.15 ;
                  }*/

                  /*if(player1.x <= 590 && keyDown("space") && player1.y >= 220 && player1.x >= 335) {
                    player1.velocityY = -12;
                  }else if(keyDown("space") && player1.y >= 105 && player1.x <= 1160 && player1.x >=590) {
                    player1.velocityY = -12;
                  }else if(player1.x >= 875 && keyDown("space") && player1.y >= 220 && player1.x <= 1420) {
                    player1.velocityY = -12;
                  }*/

                  /*if(keyDown(UP_ARROW) && player.index === 1){
                    player.distancey += 20;
                    player.update();
                  }*/
                  if(player1.isTouching(player2) && keyDown("e")) {
                    player.score += 2;
                    player.health -= 5;
                    player.update();
                  }

                  if (keyDown("w") && player.score >= 100 && player.index === 1) {
                    attack = new Attack();
                    attack.distance = player.distance;
                    lBlast.x = attack.distance;
                    attack.update();
                    allPlayers.player1.distance = lBlast.x;
                    //slBlast.y = player.distancey;
                    lBlast.visible = true;
                    writePosition(1,0);
                    player.score = 0;  
                                 
                  }
                  if (keyDown("s") && player.score >= 100 && player.index === 1) {
                    attack = new Attack();
                    attack.distance = player.distance;
                    lBlast.x = attack.distance;
                    attack.update();
                    allPlayers.player1.distance = lBlast.x;
                    //slBlast.y = player.distancey;
                    lBlast.visible = true;
                    writePosition(-1,0); 
                    player.score = 0;               
                    
                  }

                  if (keyDown("w") && player.score === 100 && player.index === 2) {
                    allPlayers.player2.distance = lBlast.x;
                    //slBlast.y = player.distancey;
                    lBlast.visible = true;
                    lBlast.velocityX = 12; 
                    player.score = 0;               
                  }
                  if (keyDown("s") && player.score === 100 && player.index === 2) {
                    allPlayers.player2.distance = lBlast.x;
                    //slBlast.y = player.distancey;
                    lBlast.visible = true;
                    lBlast.velocityX = -12; 
                    player.score = 0;               
                  }

                  player1.velocityY = player1.velocityY + 2
                 player2.velocityY = player2.velocityY + 2


//To keep the players from falling off the world
player1.collide(invisibleGround1);
player1.collide(invisibleGround2);
player1.collide(invisibleGround3);
player1.collide(invisibleGround4);

player2.collide(invisibleGround1);
player2.collide(invisibleGround2);
player2.collide(invisibleGround3);
player2.collide(invisibleGround4);

function writePosition(x,y){
  database.ref('attacks/player').set({
    'x': position.x + x,
    
  })
}
var lBlastPosition = database.ref('attacks/player');
lBlastPosition.on("value", readPosition);
  
  function readPosition(data){
    position = data.val();
    lBlast.x = position.x;
    lBlast.y = position.y;
  }

            
                
                 
                  
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}
