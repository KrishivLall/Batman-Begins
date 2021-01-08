const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var drops = [];

function preload(){
    
}

function setup(){
   
createCanvas(800, 800);

engine = Engine.create();
world = engine.world;
    
Engine.run(engine);


boy = new Boy(100, 700, 200, 200);

if(frameCount % 150 === 0){
    for(var i = 0;i <= 100; i++){
        drops.push(new Drop(random(0, 800),random(0,800), 5));
    }
}
    
}

function draw(){

    background(0);

    boy.display();

    for(var i = 0; i <= 100; i++){
        drops[i].display();
        drops[i].update();
    }
    
}   

