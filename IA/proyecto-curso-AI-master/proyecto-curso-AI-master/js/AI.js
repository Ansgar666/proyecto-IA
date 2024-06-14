var numeroPuntos = 500;
var xP = [];
var yP = [];
var desired = [];
function Perceptron(no, learningRate = 0.00001) {

    // Set Initial Values
    this.learnc = learningRate;
    this.bias = 1;
    
    // Compute Random Weights
    this.weights = [];
    for (let i = 0; i <= no; i++) {
      this.weights[i] = Math.random() * 2 - 1;
    }
    
    // End Perceptron Object
    }
    function f(x) {
        return x * 1.2 + 50;
      }

function setup() {
    //Este codigo se ejecuta 1 vez solamente, al principio
    
    createCanvas(1000, 1000); 
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
        strokeWeight(5);
        stroke (`red`)
        point (xP[i], yP[i])
    if (desired[i]){
        stroke (`blue`);
        point(xP[i],yP[i])
    }
    
  }   
    
}
