class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
        
    }

    attach(polygon){
        this.sling.bodyA = polygon;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
               
           stroke("white");
           strokeWeight(5);

            line(pointA.x, pointA.y, pointB.x, pointB.y);
          
               
        }
       

        
    }
    
}