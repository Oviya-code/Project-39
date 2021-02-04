class Hero {
    constructor(x,y,r) {

      var options = {

          isStatic: true

      }
      
      this.r = r;
      this.image = loadImage("images/Superhero-01.png");
     this.body = Bodies.circle(x,y,this.r,options);
     this.color = "red";
     World.add(world, this.body);
    }
    display(){
     var pos =this.body.position;
     var angle=this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     fill (this.color);
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r)
     imageMode(CENTER);
     scale(0.3);
    image(this.image, 0, 0, this.width, this.height);
     pop();
    }
  };