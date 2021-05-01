
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var ball1;
	var ball2;
	var ball3;
	var ball4;
	var log;
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	log.createSprite(400,350,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  log.display();
  
  drawSprites();
 
}



