var wall, thickness;
var bullet, speed, weight;

function setup(){
  createCanvas(1600,400);
 speed = random(35,110);
 thickness = random(212,341);
 weight = random(20,62);
 bullet = createSprite(50,200,50,30);
 wall=createSprite(1500,200,thickness,height/2);
}

function draw(){
  background(0,0,0);
  bullet.velocityX = speed;
  if(wall.x - bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if(damage>5){
      wall.shapeColor = color(0,255,0);
    }
    if(damage<5){
      wall.shapeColor =  color(255,0,0);
    }
  }
    drawSprites();
}