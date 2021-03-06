class Ball{
    constructor(x,y,radius){
        var Properties={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius,Properties);
        this.radius=radius;
        World.add(world,this.body)
    }

    display(){
        push();
        var position=this.body.position;
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(position.x,position.y,this.radius);
        pop();
    }
}


