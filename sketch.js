var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);


  speed=random(223,321)
  weight=random(30,52)
  
  thickness=random(22,83);

  bullet=createSprite(50, 180, 50, 50);
  bullet.velocityX=speed;
  bullet.shapeColor="red"

 

  wall=createSprite(1000,200,thickness,height/2);
 
  wall.shapeColor=color(80,80,80)
 
}

function draw() {
  background(0);  
  hasCollided();
  

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * wieght *speed *speed/(thickness*thickness*thickness);
    
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor(0,255,0);
    }
  }  

   
                
  drawSprites();
}

