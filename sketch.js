//constants
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//variables
var engine, world;
//variables for the objects
var box1,box2,ground;

function setup() {
  createCanvas(400,400);
  //physics engine
  engine=Engine.create();
  //creating the world
  world=engine.world;
  //making the objects
  box1=new Box(200,300,50,50)
  box2=new Box(240,100,50,100)
  ground=new Ground(200,390,400,20)
}

function draw() {
  background(0);
  //updating the engine
  Engine.update(engine);
  //displaying the objects using the function from the class
  box1.display();
  box2.display1();
  ground.display();
}