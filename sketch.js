const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject, world;
var dustbinObject;

function preload()	{
	dustbinObject = loadImage('chettakundi.png')
	paperObject = loadImage('paper.png')
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustbinObj=new Dustbin(1200,660);
	dustbinObject = createSprite(1200,610,210,120);
	paperObject=new paper(200,0,50);

	groundObject=new ground(width/2,780,width,200);	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  dustbinObj.display();
 // dustbinObject.display();
  paperObject.display();
  groundObject.display(); 
}

function keyPressed() {
  	if (keyCode === 32) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-150});
	}
}