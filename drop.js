class Drop {
    constructor(x, y, radius) {
      var options = {
          isStatic : false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          
        }
        
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world , this.body);
    }
    display(){
      var pos = this.body.position
      var angle = this.body.angle;
      push();
      rotate(angle);
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("blue");
      ellipse( 0, 0, this.radius, this.radius)
      pop();
    }
    update(){
        if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0, 800), y:0});
        }
    }
  }