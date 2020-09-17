class boy
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
        this.h=h
        this.image=loadImage("boy.png");
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{			
			var boyPos=this.body.position;
			push();
			translate(boyPos.x,boyPos.y);
			//rectMode(CENTER);
			//rect(0,0,this.w, this.h);
			imageMode(CENTER);
            image(this.image,0,0,this.w,this.h);	
			pop();
			
	}

}