var bunny,bunnyIMG,lava,lavaIMG,ground1,groundIMG,ground2;
var crate,crateIMG;

function preload(){
  bunnyIMG=loadAnimation("bunny_running_1.png","bunny_running_2.png");
  lavaIMG=loadImage("lava image.jpg");
  groundIMG=loadImage("GroundTile.png");
  crateIMG=loadImage("Crate.png");
}

function setup() {
  createCanvas(800,400);

  ground1=createSprite(50,height-10,250,height-380);
  ground1.addImage(groundIMG);

  ground2=createSprite(750,height-10,200,height-380);
  ground2.addImage(groundIMG);

  lava=createSprite(400,height-5,245,height-385)
 // lava.addImage(lavaIMG);

  bunny=createSprite(100,height-75,10,10);
  bunny.addAnimation("running",bunnyIMG);

  
  
}

function draw() {
  background("lightBlue");  

  if(keyDown("RIGHT_ARROW")){
    bunny.x+=5
  }

  if(keyDown("LEFT_ARROW")){
    bunny.x-=5
  }

  spawnCrate();

  drawSprites();
}

function spawnCrate(){
  if(frameCount%60===0){
    var randx=Math.round(random(width/2-200,width/2+100));
    var randy=Math.round(random(height/2-100,height/2+100));

    crate=createSprite(randx,0,50,10);
    crate.velocityY=2;
    //crate.addImage(crateIMG);

    
  }
}
