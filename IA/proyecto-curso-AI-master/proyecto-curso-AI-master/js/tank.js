var x = 0;
var z = 0;
class tanque {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    w = 50;
    h = 50;
    
    currentBodyAngle = 0;
        dibujarTanque(){
            rectMode(CENTER);
            z += 0;
            translate (this.x, this.y);
            rotate (z);
            rect (0,0,95,72,15)
            rect (0,0,75,75)
            
        }
        dibujar (){
            rectMode(CENTER);
            x +=0.00;
            rotate (x);
            rect (0, 0,this.w,this.h)
            rect (0,25,10,50)
           
        }
        
        moverse (key1,key2,key3,key4){
          
            if (keyIsDown(key1)){
                z +=0.04;
            }
            if (keyIsDown(key2)){
                z -=0.04;
            }
            if (keyIsDown(key3) ){
                this.y = this.y + 5
                this.x = this.x + 5
            }
            if (keyIsDown(key4) ){
                this.y = this.y - 5
                this.x = this.x - 5
            }

        }
       rotar (key5, key6){
        if (keyIsDown(key5)){
            
            x +=0.04;  
        }
        if (keyIsDown(key6)){
            
            x -= 0.04;   
        }
       }

}
class Disparos {
    constructor (x,y){
        this.x = x;
        this.y = y;
    }
    w = 10;
    h = 10;
    dibujarDisparo(){
        rect (this.x, this.y,this.w,this.h)
    }
    fuego (){
        if (keyIsDown(32)){
            this.y = this.y +5;
        }
    }
}

var tank = new tanque (610, 360);
var disparo = new Disparos(0,0+50)

function setup(){
    background(0);

    createCanvas(1280, 720);
}
function draw (){
    background (0);
    tank.dibujarTanque();
    tank.dibujar();
    tank.moverse(37,39,40,38);
    tank.rotar (65,68)
    disparo.dibujarDisparo();
    disparo.fuego();
}