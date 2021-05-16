class Wolf{
    constructor() {
        wolf = createSprite(400, 200, 25,50);
        wolf.visible = false
        this.width = 25;
        this.height = 50;
        this.x = 400;
        this.y = 200;
    }
    
    display(){
        movement();
        if(wolf.x>1500 && gamestatex === "l" ){
          wolf.x = 0;
          gamestatex = "r";
        } 
        if(wolf.x<0 && gamestatex === "r"){
          wolf.x = 1500;
          gamestatex = "l";
        } 
        if(wolf.y>700 && gamestatey === "t"){
          wolf.y = 0;
          gamestatey="b";
        } 
        if(wolf.y<0 && gamestatey === "b"){
          wolf.y = 700;
          gamestatey = "t";
         }
    
    }
    
}