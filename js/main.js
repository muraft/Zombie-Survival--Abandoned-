function game()
{
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="green";
  ctx.fillRect(0,0,canvas.width,canvas.height)
  player.checkCollision();
  player.control();
  player.draw();
  requestAnimationFrame(game)
}
const player=new create("player");
game();
