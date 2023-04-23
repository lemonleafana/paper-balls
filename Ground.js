class Ground{
    constructor(x, y, w, h){
        var opt = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, w, h, opt);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y)
        rectMode(CENTER);
        fill("white");
        rect(0, 0, this.width, this.height);
        pop();
    }
}