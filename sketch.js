//var fixedRect,movingRect;

//creating a variable for car
var car;

//creating a variable for wall
var wall;

//creating a variable for speed;
var speed;

//creating a variable for weight 
var weight;

function setup() {
    //creating a canvas
    createCanvas(1600,400);

    // fixedRect= createSprite(200, 200, 50, 80);
    // movingRect= createSprite(400, 200, 80, 30);

    //creating the car
    car=createSprite(50,200,50,50);

    //creating a wall
    wall=createSprite(1500,200,60,height/2);

    //giving a colour to wall
    wall.shapeColor=color(80,80,80);

    //setting the value of speed to random
    speed=random(55,90);

    //setting the value of weight to random
    weight=random(400,1500);

}

function draw() {

  //giving a colour to background
  background(255,255,255);  

  // movingRect.x=World.mouseX;
  // movingRect.y=World.mouseY;

  //setting the velocity of car to random
  car.velocityX=speed;

  //to test the relaibility of the car
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  car.velocityX=0;

  var deformation=0.5 * weight * speed * speed/22500;

    if (deformation>180)
    {
    car.shapeColor=color(255,0,0);
    }

      if(deformation<180 && deformation>100)
      {
       car.shapeColor=color(230,230,0);
      }
 
        if(deformation<100)
        {
        car.shapeColor=color(0,225,0);
        }

   }
  /*if(is_touching()){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";

  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
    
  }*/

  //functions to make the sprites visible
  drawSprites();
}
