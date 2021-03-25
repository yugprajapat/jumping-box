var canvas,S1,S2,S3,S4;
var music,ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    S1= createSprite(100,590,180,20);
    S1.shapeColor = "red";

    S2= createSprite(300,590,180,20);
    S2.shapeColor = "green";

    S3= createSprite(500,590,180,20);
    S3.shapeColor = "blue";

    S4= createSprite(700,590,180,20);
    S4.shapeColor = "yellow";

    //create box sprite and give velocity
    ball = createSprite(random(10,750),300,20,20);
    ball.shapeColor = "white";
    ball.velocityX = 3;
    ball.velocityY = 3;

}

function draw() {
    background(rgb(10,10,10));
 
    if(ball.x < 0){
        music.stop();
        ball.velocityX = 3;
    }
    else if(ball.x > 800){
        music.stop();
        ball.velocityX = -3;
    }
    if(ball.y < 0){
        music.stop();
        ball.velocityY = 3;
    }
    else if(ball.y > 600){
        music.stop();
        ball.velocityY = -3;
    }
    if(isTouching(ball,S1)){
        music.play();
        ball.shapeColor = "red";
        bounceOff(ball,S1);
    }
    else if(isTouching(ball,S2)){
        music.play();
        ball.shapeColor = "green";
        bounceOff(ball,S2);
        ball.velocityX = 0;
        ball.velocityY = 0;
    }
    else if(isTouching(ball,S3)){
        music.play();
        ball.shapeColor = "blue";
        bounceOff(ball,S3);
    }
    else if(isTouching(ball,S4)){
        music.play();
        ball.shapeColor = "yellow";
        bounceOff(ball,S4);
    }
    if(ball.x<0){
        music.stop();
        ball.velocityX = 3;
    }

    drawSprites();
}

function isTouching(object1,object2){
    if(object1.x-object2.x<object2.width/2+object1.width/2&&
        object2.x-object1.x<object1.width/2+object2.width/2&&
        object1.y-object2.y<object1.height/2+object2.height/2&&
        object2.y-object1.y<object1.height/2+object2.height/2){
            return true;
        }
    else{
        return false;
    }
}

function bounceOff(object1,object2){
if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object1.width/2+object2.width/2){
object1.velocityX = object1.velocityX* -1;
object2.velocityX = object2.velocityX* -1;
}
if(object1.y-object2.y<object1.height/2+object2.height/2&&object2.y-object1.y<object1.height/2+object2.height/2){
object1.velocityY = object1.velocityY* -1;
object2.velocityY = object2.velocityY* -1;
}
if(object1.x<0){
    object1.velocity.x = 3;
}
else if(object2.x>1200){
    object2.velocity.x = 13
}
}