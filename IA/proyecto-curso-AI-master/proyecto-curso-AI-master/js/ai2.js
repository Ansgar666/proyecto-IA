var numeroPuntos = 500;
var xP = [];
var yP = [];
var desired = [];
var learningRate = 0.00001;
var ptron = new Perceptron(2,learningRate)

    
    
    for (let i = 0; i <=1000; i++) {
           
     for (let i = 0; i < numeroPuntos; i++) {
      
        ptron.train([xP[i],yP[i],desired[i]])
    
  }
    }
    // End Perceptron Object
  
    function f(x) {
        return x * 1.2 + 50;
      }

function setup() {
    //Este codigo se ejecuta 1 vez solamente, al principio
    
    createCanvas(1000, 1000); 
    background (255);
    for (let i = 0; i <numeroPuntos; i++){
        xP[i] = Math.random () * 1000;
        yP[i] = Math.random () * 1000;
        
    }
    
    line (0,f(0),1000,f(1000))
    
    for (let i = 0; i < numeroPuntos; i++) {
      desired[i] = 0;
      if (yP[i] > f(xP[i])) {
        desired[i] = 1;}
    }
}


function draw() {
    for (let i = 0; i <numeroPuntos; i++){
   var x = xP[i];
   var y = yp[i];
   let guess = ptron.activate([x,y,ptron.bias])
   if (guess == 0){
    stroke(`blue`);
    point(x,y);
   }
    
    
  }   
    
}