var starImg,bgImg;
var star, starBody;
var fairy,fairyImage,fairyHand;
//create variable 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//stands for physics Engine

function preload(){

	//preloads images,sound and animation 
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImage = loadAnimation("fairyImage1.png","fairyImage2.png");
	music = loadSound("JoyMusic.mp3");
}

function setup() {

	//creates canvas
	createCanvas(800, 750);

	//plays music
	
	
	//creates the variable star
	star = createSprite(650,30);
	//adds image of the star
	star.addImage(starImg);
	//sets the size of the image
	star.scale = 0.2;

	//creates own physics engine
	engine = Engine.create();
	//creates own world
	world = engine.world;

	//gives star body some properties and acts like its real body
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	//creates fairy 
	fairy = createSprite(400,550,20,20);
	fairy.addAnimation("fairyAnimation",fairyImage);
	fairy.scale = 0.2;
	
	//stands for fairy ' s hand
	fairyHand = createSprite(fairy.x + 100,550,20,20);
    fairyHand.visible = false;
	
	//makes the physic engine run
	Engine.run(engine);

}


function draw() {

  //sets the background of the game
  background(bgImg);

  //sets the x and y axis of star
  star.x= starBody.position.x ;
  star.y= starBody.position.y ;

  //stops the star when fairy's hand touches the star
  if(star.isTouching(fairyHand)){
	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

//performs the following function when certain keys are pressed
function keyPressed() {

	//makes the star fall
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//moves the fairy left side
	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 10;
		fairyHand.x = fairyHand.x - 10;
	}

	//mives the fairy right side
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 10;
		fairyHand.x = fairyHand.x +10;
	}
	
}
