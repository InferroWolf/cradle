class Rope {
    constructor(body1,body2,offsetX,offsetY){
      this.offsetX=offsetX;
      this.offsetY=offsetY;
     var options ={
      
      bodyA:body1,
      bodyB:body2,
      pointB:{x:offsetX,y:offsetY}
     }
     this.rope = Constraint.create(options);
     World.add(world,this.rope);

    }
    display(){
      var pointA = this.rope.bodyA.position;
      var pointB = this.rope.bodyB.position;
      strokeWeight(4);
      stroke("green");
      line(pointB.x,pointB.y,pointA.x+this.offsetX,pointA.y+this.offsetY);

    }
     }