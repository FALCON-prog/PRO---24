class Stone {
    constructor(x,y){
        var options = {
            'restitution' : 0.2,
            'friction' : 2,
            'density' : 6
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 10;
        this.height = 20;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
    translate(pos.x, pos.y);
    rotate(angle)
    strokeWeight(3);
    stroke('white')
    fill('silver')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
    }
}