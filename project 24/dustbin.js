Matter.Bodies.circle(x, y, radius, [options], [maxSides]);
radius = 70;

function keyPressed(){
    if (keyCode ===  UP_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body,position,{x:85,y:-85});
   

    }
}
