class Paper{
	constructor(x,y,r)
	{

	var options = {
        isStatic :false,
		density:1,
		friction: 0,
		restitution:1.2
	  };
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r ,options)
        this.image = loadImage("paper.png")
		World.add(world, this.body);

	}
	display()
	{	
		    push();
			ellipse(0,0,this.r,this.r);
            imageMode(CENTER);
            image(this.image,600,650, 50, 50);
            pop();
			
	}

}