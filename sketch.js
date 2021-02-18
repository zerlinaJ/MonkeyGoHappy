
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (600,200);
  text("MONKEY", 200,200)
  monkey = createSprite(50,160,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1; 
  
  ground = createSprite(300,195,900,10);
  ground.velocityX = -3;
  
  bananaGroup = new Group();
}


function draw() {
  background("white");
  
  text("Survival Time: " + score,475,50);
 // console.log("frameCount: " + frameCount);
 // console.log("frameRate: " + frameRate());
  score = Math.ceil(frameCount/frameRate());
  
  if(ground.x<200)
    {
      ground.x = ground.width/2;
    }
  
  if(keyDown("space") && monkey.y > 100){
    monkey.velocityY = -8;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  
  monkey.collide(ground);
  spawnBanana();
  spawnObstacle();
  drawSprites();
  
}


function spawnBanana(){
  if(frameCount%80 === 0)
    {
      banana = createSprite(600,50,10,10);
      banana.addImage(bananaImage);
      banana.velocityX = -4;
      banana.scale = 0.1;
      var rand = Math.round(random(20,100));
      banana.y = rand;
      banana.lifetime = 150;
      bananaGroup.add(banana);
    }
}

function spawnObstacle(){
     if(frameCount%300 === 0){
       obstacle = createSprite(600,173,10,10);
       obstacle.addImage(obstacleImage);
       obstacle.scale = 0.1;
       obstacle.velocityX = -4;
     }
}


