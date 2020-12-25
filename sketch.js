var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var downPressed = false;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1Sprite = createSprite(width/2, 650, 200, 10);
	box1Sprite.shapeColor = "red";

	box2Sprite = createSprite((width/2) - 100, 605, 10, 100)
	box2Sprite.shapeColor = "red";

	box3Sprite = createSprite((width/2) + 100, 605, 10, 100)
	box3Sprite.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , 200 , 5 , {restitution:0.5, isStatic: true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
	box1 = Bodies.rectangle(width/2, 630, 100, 20);
	World.add(world, ground);
	World.add(world, box1);


	Engine.run(engine);
  
}

 
function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   
		Matter.Body.setStatic(packageBody, false);
    
  }
}



