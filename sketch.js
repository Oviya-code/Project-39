const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraints = Matter.Constraint;

gameState = 0;

function preload() {
//preload the images here
backImg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine=Engine.create();
  world=engine.world;
  // create sprites here
 ground = new Ground(50,750,2000,10);
 hero = new Hero(750,400,20);
 rope = new Fly(hero.body,{x:500,y:50});
 block1 = new Block(750,700,30,30);
 block2 = new Block(750,670,30,30);
 block3 = new Block(750,640,30,30);
 block4 = new Block(750,610,30,30);

 block5 = new Block(810,700,30,30);
 block6 = new Block(810,670,30,30);
 block7 = new Block(810,640,30,30);
 block8 = new Block(810,610,30,30);

 block9 = new Block(870,700,30,30);
 block10 = new Block(870,670,30,30);
 block11 = new Block(870,640,30,30);
 block12 = new Block(870,610,30,30);

}

function draw() {
  background(backImg);
  Engine.update(engine);
ground.display();
hero.display();
rope.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
mouseDragged();

if(hero.x === 750 && hero.y === 650){
  gameState = 2;
  end();
}
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x :mouseX, y: mouseY});

}

function end(){
  console.log("Game Ended");
}