class Slingshot
{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        var pt1 = this.sling.bodyA.position;
        var pt2 = this.sling.pointB;
        strokeWeight(2);
        line(pt1.x, pt1.y, pt2.x, pt2.y);
    }
    
}


