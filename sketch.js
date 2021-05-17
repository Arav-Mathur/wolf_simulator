
var wolf, lwolf,rwolf,bwolf,fwolf
var prey, deer_img,deer,rabbit_img,rabbit,ox_img,ox,fish,fish_img
var bg, l_wall1, cave_img, score, bg_bl,bg_br,bg_tr,bg_tl, gamestatex,gamestatey,Xwall, Ywall

/*if (gamestatex === "r" && gamestatey === "b") { 
  var cave = createSprite(1040,470,70,70);
  cave.visible = true
  } */
  function preload() {
  bg_bl = loadImage("images/bg-bl.PNG");
  bg_br = loadImage("images/bg-br.PNG");
  bg_tl = loadImage("images/bg-tl2.png");
  bg_tr = loadImage("images/bg-tr.PNG");

  lwolf = loadImage("images/l-wolf.png");
  rwolf = loadImage("images/r-wolf.png");
  bwolf = loadImage("images/b-wolf.png");
  fwolf = loadImage("images/f-wolf.png");

  deer_img = loadImage("images/deers.png")
  ox_img = loadImage("images/bison.png")
  rabbit_img = loadImage("images/big-doofuses.png")
  fish_img = loadImage("images/fish.PNG")


}



function setup() {
  createCanvas(1500,700);
  score = 0
  //cave
 //I am keeping this because we MIGHT need more cave stuff from here so I am not deleting it
  cave = createSprite(1040,470,70,70);
 cave.visible = false;
//wolf
  wolf = new Wolf(); 

  gamestatex = "r";
  gamestatey = "b";
  bg = createSprite(750,350,1500,700);
  bg.visible = false;

  //walls
   Xwall = createSprite (1400,300,320,700);
   Ywall = createSprite (750,640,1600,160);

  //deer
  deer = createSprite(150,200,200,200);
  deer.visible = false

  //rabbit
  rabbit = createSprite(400,400,150, 150);
  rabbit.visible = false

  //ox
  ox = createSprite(200,200,200,200);
  ox.visible = false

  //fish
  fish = createSprite(600,400,100,100);
  fish.visible = false

}

function draw() {
  background(bg_br)
  
  //bg
  if (gamestatey === "b" && gamestatex === "r"){
    imageMode(CENTER)
    image(bg_br,bg.x,bg.y,bg.width,bg.height);
  }
  if (gamestatey === "b" && gamestatex === "l"){
    imageMode(CENTER)
    image(bg_bl,bg.x,bg.y,bg.width,bg.height);
  }
  if (gamestatey === "t" && gamestatex === "r"){
    imageMode(CENTER)
    image(bg_tr,bg.x,bg.y,bg.width,bg.height);
  }
  if (gamestatey === "t" && gamestatex === "l"){
    imageMode(CENTER)
    image(bg_tl,bg.x,bg.y,bg.width,bg.height);
  }
 
  //score
  textSize(20);
  fill('white');
  text("Score = "+ score, 80,50);

  //cave

  if (isTouching(wolf,cave) && gamestatey === "b" && gamestatex === "r") {
    text("lol",wolf.x,wolf.y)
    cave.visible = false;
    for (var i = 10; i >= 0; i = i-1) {
      console.log(i);
   } 
  } else{
    cave.visible = false;
    movement();
  }

  
  wolf.display();

  Deer();
  Rabbit();
  Ox();
  Fish();
  Walls();

    drawSprites();
}

function changePosition(x,y){
  wolf.x = wolf.x + x;
  wolf.y = wolf.y + y;
}

function Deer(){
  if(gamestatey === "b" && gamestatex === "r"){

    imageMode(CENTER);
    image(deer_img, deer.x, deer.y);
  
      if (deer.x >= 700) {
      deer.velocityX = -5 
    }
    
      if (deer.x <= 150) {
      deer.velocityX = 5 
    } 
    if(isTouching(wolf,deer)){
      score = score + 1;
    }
  } else{
    deer.velocityX = 0
      deer.x = 150
    }

}

function Rabbit(){
  if(gamestatey === "b" && gamestatex === "l"){

    imageMode(CENTER);
    image(rabbit_img, rabbit.x, rabbit.y, rabbit.width, rabbit.height);
  
      if (rabbit.y >= 400) {
        rabbit.velocityY = -5 
    }
    
      if (rabbit.y <= 200) {
        rabbit.velocityY = 5 
    }
    if(isTouching(wolf,rabbit)){
      score = score + 1;
    }
  } else{
    rabbit.velocityY = 0
    rabbit.y = 400
  } 
}

function Ox(){
  if(gamestatey === "t" && gamestatex === "r"){

    imageMode(CENTER);
    image(ox_img, ox.x, ox.y, ox.width, ox.height);
  
      if (ox.y >= 600 ) {
        ox.velocityY = -5
    }
    
      if (ox.y <= 350) {
        ox.velocityY = 5 
    }
    if(isTouching(wolf,ox)){
      score = score + 1;
    }
  } else{
    ox.velocityY = 0
    ox.y = 300
  } 
}

function Fish(){
  if(gamestatey === "t" && gamestatex === "l"){

    imageMode(CENTER);
    image(fish_img, fish.x, fish.y, fish.width, fish.height);
  
      if (fish.x >= 800 ) {
        fish.velocityX = -5
    }
    
      if (fish.x <= 550) {
        fish.velocityX = 5 
    }
    if(isTouching(wolf,fish)){
      score = score + 1;
    }
  } else{
    fish.velocityX = 0
    fish.x = 550
  } 
}

function movement(){
  if(keyDown(LEFT_ARROW)){
    changePosition(-5,0);
    imageMode(CENTER);
    image(lwolf, wolf.x, wolf.y); 
  }
else if(keyDown(RIGHT_ARROW)){
    changePosition(5,0);
    imageMode(CENTER);
    image(rwolf, wolf.x, wolf.y);
}
else if(keyDown(UP_ARROW)){
    changePosition(0,-5);
    imageMode(CENTER);
    image(fwolf, wolf.x, wolf.y);
}
else if(keyDown(DOWN_ARROW)){
    changePosition(0,5);
    imageMode(CENTER);
    image(bwolf, wolf.x, wolf.y);
} else{
  imageMode(CENTER);
    image(fwolf, wolf.x, wolf.y);
}

}

function Walls(){
  bounceOff(wolf,Ywall);
  
Ywall.visible = false
Xwall.visible = false

  if (gamestatey === "b" && gamestatex === "r") {
Xwall.x = 1400;
Ywall.y = 640;
  }
if (gamestatey === "t" && gamestatex === "r") {
  Xwall.x = 1400;
  Xwall.y = 350;
  Ywall.y = 99;
  }
  if (gamestatey === "t" && gamestatex === "l") {
    Xwall.x = 120;
    Xwall.y = 350;
    Ywall.y = 80;
    Ywall.x = 750;
    Ywall.height = 120  
    }
    if (gamestatey === "b" && gamestatex === "l") {
      Xwall.x = 120;
      Xwall.y = 350;
      Ywall.y = 600;
      Ywall.x = 750;
      Ywall.height = 120  
      }
    }
