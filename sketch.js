
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5
var roof;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.

	Engine.run(engine);
    roof=new Roof(400,100,700,30);
	bob1=new BobClass(215,500,65);
    bob2=new BobClass(280,500,65);
	bob3=new BobClass(345,500,65);
	bob4=new BobClass(410,500,65);
	bob5=new BobClass(475,500,65);
	rope1=new Rope(roof.body,bob1.body,-185,0);
	rope2=new Rope(roof.body,bob2.body,-120,0);
	rope3=new Rope(roof.body,bob3.body,-65,0);
	rope4=new Rope(roof.body,bob4.body,10,0);
	rope5=new Rope(roof.body,bob5.body,75,0);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 
}

function keyPressed(){
if(keyCode===38){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:-10})
  console.log("executed");
}
}
