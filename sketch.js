var canvas;
var music;
var surface1, surface2, surface3, surface4, box, edges;
function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(0,580,360,30);    
    surface1.shapeColor="blue";

    surface2 = createSprite(295,580,200,30);    
    surface2.shapeColor="green";

    surface3 = createSprite(515,580,200,30);    
    surface3.shapeColor="red";

    surface4 = createSprite(740,580,220,30);    
    surface4.shapeColor="yellow";

    box = createSprite(random(20,750),100,40,40);    
    box.shapeColor="white";
    box.velocityX=5;
    box.velocityY=7;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  edges =  createEdgeSprites();
   box.bounceOff(edges);
   //box.bounceOff(surface1);
   //box.bounceOff(surface2);
   //box.bounceOff(surface3);
  // box.bounceOff(surface4);
   if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor="blue";
    music.play();
   }
   if(surface2.isTouching(box)){
    box.shapeColor="green";
    box.velocityX=0;
    box.velocityY=0;
    music.stop();
   }
   if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor="red";
   }
   if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor="yellow";
   }
   //surface1.display();
   //surface2.display();
   //surface3.display();
   //surface4.display();
   //box.display();
    //add condition to check if box touching surface and make it box
    drawSprites();
}
