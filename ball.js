class Ball {
    constructor(x, y,radius) {
      var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 1.5 ,
          density : 3.2 ,
      }
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(this.x, this.y, radius, options);
      
      World.add(world, this.body);
    }

    display(){
      push();
      ellipseMode(RADIUS); 
      circle(0,0,this.radius)
      pop();
    }
  };