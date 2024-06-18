class Cara {
    constructor (x,y,d ){
        this.x = x
        this.y = y
        this.d = d 
    }
    dibujar (){
            strokeWeight(4)
            circle (this.x,this.y,this.d)
            
    }

}
class Cruz{
    constructor(x1,y1,x2,y2){
        this.x1=x1
        this.y1=y1
        this.x2=x2
        this.y2=y2
    }
    dibujar(){
        line (this.x1,this.y1,this.x2,this.y2)
    }
}
class Boca {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    w = 150
    h = 100
    start = 600
    stop = 0
    dibujar (){
        arc(this.x,this.y,this.w,this.h,this.start,this.stop,OPEN)
    }
}
var circ = new Cara(640,360,300)
var recta = new Cruz(640,230,640,300)
var recta2 = new Cruz(620,280,660,280)
var arco = new Boca(645,445)
function setup(){
    createCanvas(1280,720)

}
function epilep(from,to){
    let color = from;
    let timerId = setInterval(function() {
      background(color);
      if (color == to) {
        clearInterval(timerId);
      }
      color++;
    });
}
function star(x, y, radius1, radius2, npoints) {
    let angle = PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
function draw (){
    
    
   
    epilep(0,255);
    
    
    circ.dibujar();
    recta.dibujar();
    recta2.dibujar();
    arco.dibujar()
    circle(580,340,88)
    circle(700,340,88)
    star(580, 340, 10, 40, 5);
    star (700,340,-10,-40,5);
   
}