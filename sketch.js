const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var platform;
var slingShot;

function preload(){
    backgroundImg= loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
 

    obj = new Throw(100,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(obj.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   

    box3.display();
    box4.display();

   box5.display();
    

    obj.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(obj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}