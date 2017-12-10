var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');
/*
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(0, 0, 10, 10);

//line

c.beginPath();
c.moveTo(0, 50);
c.lineTo(50, 70);
c.lineTo(70, 60);
c.stroke();


for (var i = 0; i < 200;  i++){

  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;


c.beginPath();
c.arc(x, y, 10, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();

}


function Circle(x, y, dx, dy, rad){
 this.x = x;
 this.y = y;
 this.dx = dx;
 this.dy = dy;
 this.rad = rad;

 this.draw = function(){

c.beginPath();
c.arc(this.x, this.y, this.rad, 10, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();

  }

 this.update = function(){

if (this.x + this.rad > innerWidth || this.x - this.rad < 0){
   this.dx = -this.dx
}
if (this.y + this.rad > innerHeight || this.y - this.rad < 0){
   this.dy = -this.dy;
}
 this.x += this.dx;
 this.y += this.dy;

 this.draw();
}

}

cc = new Circle(10, 10. 10, 10, 20);
*/



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

