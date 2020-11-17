class Roof {
    constructor(x,y,width,height) {
        options(){

        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill('yellow');
      rect(pos.x, pos.y, this.width, this.height);
    }
  }