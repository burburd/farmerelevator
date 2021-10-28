var canvas;
var backgroundImg;
var farmer,farmerImg;

function preload(){
    backgroundImg=loadImage("qwertyuiop.png");
    farmerImg=loadImage("farmer.png");
}

function setup(){
    createCanvas(1200,800)
   farmer=createSprite(100,600)
   farmer.addImage(farmerImg)
   farmer.scale = 0.5
}

function draw(){
    background(backgroundImg)
    

    if(keyIsDown('right')){
        farmer.x=farmer.x+1
         
     }
    if(keyIsDown('left')){
        farmer.x=farmer.x-1
    }
     drawSprites()
}





