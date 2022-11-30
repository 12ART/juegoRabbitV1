const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var bg_img, food, rabbit;
var rope;

function preload(){
  bg_img = loadImage("background.png")
  food = loadImage ("melon.png")
  rabbit = loadImage ("Rabbit-01.png")

}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  rope = new Rope(7, {x:245, y:30})
  fruit = Bodies.circle(300,300,20)
 
  imageMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  image(bg_img, width/2, height/2, 500, 700)

  image(food, fruit.position.x, fruit.position.y, 60,60)

  rope.show();

  Engine.update(engine);
   
}




