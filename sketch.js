

function setup() {
  resizeCanvas(500,500);
  background(255);
   // colors = [color(255,0,0), color(0,255,0), color(0,0,255)];
  
}

function draw() {
//if(frameCount % 10===0) 
   textSize(20);
   fill(0,0,0,100);
text("Festival Jazzdor Strasbourg Berlin 2016",mouseX,mouseY);

ball.draw();
}

var ball = {
  position : {x: 0, y: 250},
  speed: {x: 1, y: 2},
  draw: function() {
    
    var index = Math.floor(random(3));
    
    var colors = [color(94,120,252), color(247,247,69), color(255,54,54)];
    var c = colors[index];
    console.log(c);
    fill(c);
    noStroke();
  rect(mouseX,mouseY,80,40)
  }
}



  