class Dino {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    w = 20
    h = 100;
    v = 2
    grav = 0.8;
    dibujar (){
        rect (this.x,this.y,this.w,this.h)
        
    }
    saltar (){
            this.v = this.v + this.grav;
        }

    mover (){
    if(this.y <615 || this.v <0){
        this.saltar();
        this.y = this.y + this.v
    }
    if (keyIsDown(32)){
        this.v = this.v -2;
    }
    }
}
class Enemies {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    dibujar (){
        
            rect(this.x, this.y, 40, 40);
            this.y = this.y 
            this.x = this.x - 5;
    
}
    choque(){
        if (this.y == dinos.y){
            location.reload();
        }
    }
}

var dinos = new Dino(200,600);
var enemigos = new Enemies(1280,670)
function setup(){
    background(0);

    createCanvas(1280, 720);
}
function draw (){
    background(255)
    dinos.dibujar();
    dinos.mover();
    
    enemigos.dibujar();
    enemigos.choque();
    

}
