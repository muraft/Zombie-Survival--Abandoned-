class create
{
	constructor(name)
	{
		units(name,this);
		this.up=true;
		this.right=true;
		this.down=true;
		this.left=true;
	}
	checkCollision()
	{
		this.up=true;
		this.right=true;
		this.down=true;
		this.left=true;
		if(this.y-this.step<60)
		{
			this.up=false;
		}
		if(this.x+this.step>=canvas.width)
		{
			this.right=false;
		}
		if(this.y+this.step>=canvas.height)
		{
			this.down=false;
		}
		if(this.x-this.step<0)
		{
			this.left=false;
		}
	}
	control()
	{
		if(upButton==true && this.up)
		{
			this.y-=this.step;
		}
		if(rightButton==true && this.right)
		{
			this.x+=this.step;
		}
		if(downButton==true && this.down)
		{
			this.y+=this.step;
		}
		if(leftButton==true && this.left)
		{
			this.x-=this.step;
		}
		
		upButton=false,rightButton=false,downButton=false,leftButton=false;
	}
	draw()
	{
		ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
	}
	shoot()
	{
		
	}
}
