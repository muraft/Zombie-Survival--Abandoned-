let upButton=false,rightButton=false,downButton=false,leftButton=false;

window.addEventListener('keydown',e=>{
    switch (e.key)
	{
        case 'ArrowLeft':
        pressed("left")
        break;
        case 'ArrowRight':
        pressed("right")
        break;
        case 'ArrowUp':
        pressed("up")
        break;
        case 'ArrowDown':
        pressed("down")
        break;
	}
    })

function pressed(key)
{
	switch(key)
	{
		case "up":
		upButton=true;
		break;
		case "right":
		rightButton=true;
		break;
		case "down":
		downButton=true;
		break;
		case "left":
		leftButton=true;
		break;
	}
}