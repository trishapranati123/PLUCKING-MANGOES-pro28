
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mango1,mango2,mango3,mango4,mango5,mango6,boyObj,treeObj,groundObj,stoneObj,launcherobj ;
function preload()
{
	
}

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj=new ground(width/2,400,width,20);
	stoneObj=new stone(50,300,30,30);
	mango1=new mango(480,220,40,50);
	mango2=new mango(560,190,40,50);
	mango3=new mango(485,160,40,50);
	mango4=new mango(520,130,40,50);
	mango5=new mango(520,200,40,50);
	boyObj=new boy(200,340,150,200);
	treeObj=new tree(500,250,150,300);
	launcherobj = new launcher(stoneObj.body,{x:150, y:300});
	
	
	Engine.run(engine);
  
}
function detectcollision(lstone,lmango)
{
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}



function draw() {
//  rectMode(CENTER);
  background("grey");
  boyObj.display();
  stoneObj.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  launcherobj.display(); 
  groundObj.display();
  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);  
  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body,{x:mouseX , y:mouseY});
}
function mouseReleased()
{
	launcherobj.fly();
}
function keyPressed(){
	if(keyCode===32)
	{
		Matter.Body.setPosition(stoneObj.body,{x:55, y:300});
		launcherobj.attach(stoneObj.body);

	}
}


