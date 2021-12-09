const units= (name,that) =>
{
	switch(name)
	{
		case "player":
		that.x=0;
		that.y=0;
		that.width=30;
		that.height=30;
		that.color="blue";
		that.image=new Image();
		that.image.src='image/stickman.png';
		that.step=30;
		break;
	}
}