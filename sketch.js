
var monkey , monkey_running,monkey_collided
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var Stone
var monkey
var ground
var survivalTime = 0;
var ground,invisibleground
var gameState = 0;

function preload(){
  
  
 monkey_running = loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup(){
  
  
  monkey = createSprite(100,340,20,50);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  monkey.setCollider("circle",0,0,14)
  ground = createSprite(400,350,800,10);
  ground.velocityX =-4;
  ground.x = ground.width/2;
 obstaclesGroup = createGroup();
  bananaGroup = createGroup();
 
}

function draw(){
  if(gameState === 0){
  
   //jump when the space key is pressed
    if(keyDown("space")){
        monkey.velocityY = -12;
       }
    monkey.velocityY = monkey.velocityY +0.8
     //stop monkey from falling down
  monkey.collide(ground); 
    if(obstaclesGroup.isTouching(monkey)){
      gameState = 1;
      obstaclesGroup.setLifetimeEach (-1)
   bananaGroup.setLifetimeEach (-1)
  monkey.velocityY = 0;
      ground.velocityX = 0;
   obstaclesGroup.setVelocityXEach(0);
     bananaGroup.setVelocityXEach(0);
    }
  //add gravity
    
  if(ground.x<0){
    ground.x=300;
  }
  banana();
  obstacle();
  
  }
  background ("white")
   stroke("black");
  textSize(20);
  fill("black");
score = Math.round(frameCount/frameRate())
text("Survival Time: "+ survivalTime, 100,50);
 drawSprites(); 
  
  
  

  
}
function banana(){
 if (frameCount % 100 === 0){
   var banana = createSprite(370,270,15,45);
   banana.velocityX = -6 
   banana.addImage(bananaImage)
   //assign scale and lifetime to the banana          
    banana.scale = 0.1;
    banana.lifetime = 300;
   
   
   //add each banana to the group
    bananaGroup.add(banana);
 }
}
function obstacle(){
 if (frameCount % 100 === 0){
   var obstacle = createSprite(350,370,15,45);
   survivalTime = 6;
   obstacle.velocityX = -(6 + score/100);
   //assign scale and lifetime to the obstacle         
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   obstacle.addImage(obstacleImage)
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}
   

  
