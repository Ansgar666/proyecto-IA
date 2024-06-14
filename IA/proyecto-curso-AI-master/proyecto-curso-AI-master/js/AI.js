var numeroPuntos = 500;
var xP = [];
var yP = [];
var desired = [];
function setup() {
    //Este codigo se ejecuta 1 vez solamente, al principio
    
    createCanvas(1000, 1000); 
    for (let i = 0; i <numeroPuntos; i++){
        xP[i] = Math.random () * 1000;
        yP[i] = Math.random () * 1000;
        
    }
    function f(x) {
        return x * 1.2 + 50;
      }

    line (0,f(0),1000,f(1000))
    
    for (let i = 0; i < numeroPuntos; i++) {
      desired[i] = 0;
      if (yP[i] > f(xP[i])) {desired[i] = 1;}
    }
}


function draw() {
    
for (let i = 0; i < numeroPuntos; i++) {
    stroke (`blue`);
        strokeWeight(5);

        point (xP[i], yP[i])
    
    let color = "black";
    if ((desired[i]) = 1){
        stroke (color);
        point(xP[i],yP[i])
    }
    
  }   
    
}
