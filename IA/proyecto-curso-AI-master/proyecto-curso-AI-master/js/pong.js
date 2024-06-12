function setup() {
    //Este codigo se ejecuta 1 vez solamente, al principio
    
    createCanvas(1280, 720); 
   
}
var posXPala = 610;
var posYPala = 700;
var posXPala2 = 610;
var posYPala2 = 0;
var vxPala = 10;
var vxPala2 = 10;
var posXBola = 618;
var posYBola = 675;
var vxBola = 3;
var vyBola = -3;
function draw() {
    //Este codigo se ejecuta cada FRAME.
    background(200);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("1:1", 640, 360);
    rect (posXPala,posYPala, 100, 20);
    rect (posXPala2, posYPala2, 100, 20);
    ellipse (posXBola, posYBola, 20, 20);
 
    if(posXBola<=0 || posXBola >=1280){
        vxBola = vxBola * -1;
    }
    if(posYBola<=0 || posYBola >= 720){
        vyBola=vyBola*-1;
    }
    if(posYBola == posYPala && (posXBola >=posXPala && posXBola <= posXPala+100)){
        vyBola = vyBola * -1;
    }
    if(posYBola == posYPala2 && (posXBola >=posXPala2 && posXBola <= posXPala2+100)){
        vyBola = vyBola * 1;
    }
    posXBola = posXBola + vxBola
    posYBola = posYBola + vyBola
    keydown();
    keydown2();
}
function keydown() {
    if (keyIsDown (37) && posXPala > 0) {
      posXPala=posXPala-vxPala;
    } else if (keyIsDown (39) && posXPala < (1280-100)) {
      posXPala=posXPala+vxPala;
    }
    
}
function keydown2() {
    if (keyIsDown (65) && posXPala2 > 0) {
      posXPala2=posXPala2-vxPala2;
    } else if (keyIsDown (68) && posXPala2 < (1280-100)) {
      posXPala2=posXPala2+vxPala2;
    }
    
}