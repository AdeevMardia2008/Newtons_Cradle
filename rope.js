class Rope{
    constructor(bodyA,bodyB) {
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04, 
            length: 10
        }
        this.rope = Constraint.create(options);
        World.add(world,rope.chain);
      }
      display(){
        strokeWeight(4);
    line(bob1.body.position.x,bob1.body.position.y, roof.body.position.x, roof.body.position.y);
    line(bob2.body.position.x,bob2.body.position.y, roof.body.position.x, roof.body.position.y);
    line(bob3.body.position.x,bob3.body.position.y, roof.body.position.x, roof.body.position.y);
    line(bob4.body.position.x,bob4.body.position.y, roof.body.position.x, roof.body.position.y);
    line(bob5.body.position.x,bob5.body.position.y, roof.body.position.x, roof.body.position.y);

      }
}