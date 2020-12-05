var n1,f1
function setup() {
  createCanvas(800,400);
 n1= createSprite(400, 200, 80, 30);
 f1=createSprite(200,200,50,80);
 n1.shapeColor="yellow"
 f1.shapeColor="yellow"
 n1.debug=true
 f1.debug=true
}

function draw() {
  background(255,255,255); 
  n1.x=World.mouseX
  n1.y=World.mouseY
  if(n1.x-f1.x<n1.width/2+f1.width/2
    && f1.x-n1.x<n1.width/2+f1.width/2
    && n1.y-f1.y<n1.height/2+f1.height/2
    && f1.y-n1.y<n1.height/2+f1.height/2){
    n1.shapeColor="green"
 f1.shapeColor="orange"
  } 
  else{
    n1.shapeColor="yellow"
 f1.shapeColor="yellow"
  }
  drawSprites();
}