var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');


var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = 10;
var dy =  10;
var rad = 10;



function a(){

c.clearRect(0, 0, innerWidth, innerHeight);
requestAnimationFrame(a);

c.beginPath();
c.arc(x, y, rad, 10, 0, Math.PI * 2, false);
c.fillStyle = "white";
c.fill();

x += dx;
y += dy;

if (x + rad > innerWidth || x - rad < 0){
   dx = -dx;
}
if (y + rad > innerHeight || y - rad < 0){
   dy = -dy;
}



}

a();

