const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var g1;
var radius = 50;
var left;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ballOpt = {
		isStatic: false,
		restitution: 0.9,
		friction: 0.3, 
		density: 1.2
	}
	ball = Bodies.circle(100,200, radius/2, ballOpt);
	World.add(world, ball);
	
	g1 = new Ground(width/2, 450, width, 10);
	World.add(world, g1);
	left = new Ground(800, 400, 10, 100);
	World.add(world, left)
	right = new Ground(600, 400, 10, 100);
	World.add(world, right)

	Engine.run(engine);

	
  
}


function draw() {

Engine.update(engine);
  	

  ellipseMode(CENTER);
  background(0);
 
  ellipse(ball.position.x, ball.position.y, ball.radius, ball.radius);
  
  g1.display();
  left.display();
  right.display();

 keyPressed();
 
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, ball.position, {x: 3, y: -6.5});
	}
}



