class Box {
    constructor(x, y, width, height) {
      var options ={
        restitution:0.04,
        friction:0.07,
        density:0.004
      }
      this.Visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    score(){
      if(this.Visibility<0 && this.Visibility>=105){
        score++;
      }
    }
    display(){
      if(this.body.speed<3){
       rectMode(CENTER);
       rect(this.body.position.x,this.body.position.y,this.width,this.height);
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5;
        tint(255,this.Visibility);
        pop();
      }
  }
}