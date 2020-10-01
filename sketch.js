var Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;

 var gameState = "PLAY";

var particle;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var turn =0;
var count =0;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

    for (var k = 0; k <=width; k = k + 80)
   {

     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background("black");
  textSize(20)
  
  Engine.update(engine);

  if(count >= 5){
    gameState="end";
  }
    if(gameState == "end" ){
      text("GAME OVER",350,250);
    }

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if (particle.body.position.x <500){
        score=score+500;
        particle=null;
      }
        else if(particle.body.position.x < 600){
          score += 100;
          particle = null;
        }
        else{
          score += 200;
          particle = null;
        }
        count ++;
      
        if(count >= 5) gameState = "end";
      }
    
  }
   text(mouseX+","+mouseY,mouseX,mouseY);
   text("200",25,510);
   text("100",105,510);
   text("400",185,510);
   text("300",265,510);
   text("500",345,510);
   text("100",425,510);
   text("400",505,510);
   text("600",585,510);
   text("300",665,510);
   text("500",745,510);
   text("Score : "+score,20,30);
}

function mousePressed(){
  if(gameState !== "end" ){
    count++
    particles.push( new Particle(mouseX,10,10));
  }
} 