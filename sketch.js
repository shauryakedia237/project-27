
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,90,600,70);

	bob1 = new Bob(400,290,120,120);
	bob2 = new Bob(400,290,120,120);
	bob3 = new Bob(400,290,120,120);
	bob4 = new Bob(400,290,120,120);
	bob5 = new Bob(400,290,120,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
}



