//code for bounce. Both given objects change velocity.
function bounce (object1,object2){
    if (object1.x-object2.x<=object1.width/2+object2.width/2 &&
      object2.x-object1.x<=object2.width/2+object1.width/2) {
  
        object1.velocityX= object1.velocityX*-1;
        object2.velocityX= object2.velocityX*-1;
  
   }
   if (object1.y-object2.y<=object1.height/2+object2.height/2 &&
    object2.y-object1.y<=object1.height/2+object2.height/2) {
  
      object1.velocityY= object1.velocityY*-1;
      object2.velocityY= object2.velocityY*-1;
  
  }
   
  }

//code for bounceOff. given sprite changes velocity. Warning: target velocity has to be 0.
function bounceOff (object1,object2){
    if (object1.x-object2.x<=object1.width/2+object2.width/2 &&
      object2.x-object1.x<=object2.width/2+object1.width/2) {
  console.log(object1.velocityX);
        object1.velocityX= object1.velocityX*-1;
        console.log(object1.velocityX); 
   }
   if (object1.y-object2.y<=object1.height/2+object2.height/2 &&
    object2.y-object1.y<=object1.height/2+object2.height/2) {
  
      object1.velocityY= object1.velocityY*-1;
  
  }
   
  }

  //code for isTouching. Checks if 2 given objects are touching.
  function isTouching(object1,object2){
    if (object1.x-object2.x<=object1.width/2+object2.width/2 &&
      object2.x-object1.x<=object1.width/2+object2.width/2 && 
      object1.y-object2.y<=object1.height/2+object2.height/2 &&
      object2.y-object1.y<=object1.height/2+object2.height/2) {
  
        return true;
   }
   else{
    return false;
   }
  }

