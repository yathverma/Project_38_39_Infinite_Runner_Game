var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

// var score=0;

var gameOver, restart;

// localStorage["HighestScore"] = 0;

function preload(){
  trex_running =   loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
// gameOverImg = loadImage("gameOver.png");
  // restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  trex = createSprite(10,height-110,20,50);
  
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided", trex_collided);
  trex.scale = 0.7;
  
  ground = createSprite(width/4,height,1000,20);
  ground.addImage("ground",groundImage);

  invisibleGround =createSprite(width/4,height-70,20000,20)
  invisibleGround.visible=false;
  // obstaclesGroup= createGroup();
  object=createSprite(300,height-70,10,20)
  object.addImage(obstacle1)  

  object1=createSprite(500,height-70,10,20)
  object1.addImage(obstacle2)  

  object2=createSprite(700,height-70,10,20)
  object2.addImage(obstacle3)  

  object3=createSprite(900,height-70,10,20)
  object3.addImage(obstacle4)  

  object4=createSprite(1100,height-70,10,20)
  object4.addImage(obstacle5)  
  // trex.setCollider("rectangle",0,0,trex.width,trex.height);


}

function draw() {
  background(255)
  // trex.debug = true;
  
    if(gameState === PLAY){

      trex.velocityX=0
  trex.velocityY=0
  if(keyDown("RIGHT_ARROW")){
    trex.velocityX=10
    trex.velocityY=0
  }
  trex.velocityY = trex.velocityY + 5

  if(keyDown("UP_ARROW")){
    trex.velocityX=0
    trex.velocityY=-5
  }
  if(keyDown("LEFT_ARROW")){
    trex.velocityX=-4
    trex.velocityY=0
  }
    camera.position.x = trex.x;
    camera.position.y = 500;
    }

    if(gameState === END){
      trex.velocityX=0
      // trex.y=0
      // obstaclesGroup.setLifetimeEach(-1);

      // obstaclesGroup.setVelocityXEach(0);
      trex.changeAnimation("colliding",trex_collided)
    }

    if(object.isTouching(trex)){
      gameState=END;
    }
    if(object1.isTouching(trex)){
      gameState=END;
    }
    if(object2.isTouching(trex)){
      gameState=END;
    }
    if(object3.isTouching(trex)){
      gameState=END;
    }
    if(object4.isTouching(trex)){
      gameState=END;
    }

    if(trex.x>1500){
      gameState = END
    }


// spawnObstacles();


    trex.collide(invisibleGround)

  drawSprites();
}

/*function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(400,height-70,10,40);
    // obstacle.velocityX = -6;
    obstacle.x = Math.round(random(width/4,1000));

     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       case 4: obstacle.addImage(obstacle4);
               break;
       case 5: obstacle.addImage(obstacle5);
               break;
       case 6: obstacle.addImage(obstacle6);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
    //  obstaclesGroup.add(obstacle);
  }
 }*/

