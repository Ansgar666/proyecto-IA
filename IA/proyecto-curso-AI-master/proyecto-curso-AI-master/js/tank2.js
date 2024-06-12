class Tanque {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    size = 50;
    sizeTower = this.size/2
    currentTowerAngle = 0;
    currentTowerAngle = 0;

        dibujarTank (){
            rectMode (CENTER)
            rect (this.x,this.y,this.w,this.h)
            
        }
        diubujarTorreta (){
            rect (this.x+20, this.y-25,10,50)
        }
        dibujarTronco(){
            
        }
        moverse (key1,key2,key3,key4){
            const angleRadians = this.currentBodyAngle * Math.PI/180;
            const displacementX = 2 * Math.sin (angleRadians);
            const displacementY = 2 * Math.cos (angleRadians);
            if (keyIsDown(key1) && this.x >0){
                this.x = this.x -10;
            }
            if (keyIsDown(key2) && this.x < (1280-this.w)){
                this.x = this.x +10;
            }
            if (keyIsDown(key3) && this.y >0){
                this.y = this.y +10;
            }
            if (keyIsDown(key4) && this.y <720){
                this.y = this.y -10;
            }

        }
        rotar (key5, key6){
            if (keyIsDown(key5)){
                let axis = [1, 1, 0];
            rotate(QUARTER_PI, axis)
            }
            if (keyIsDown(key6)){
                rotate(QUARTER_PI);
            }
        }
}

var tank = new Tanque (610, 360);

function setup(){
    background(0);

    createCanvas(1280, 720);
}
function draw (){
    background (0);
    tank.dibujar();
    tank.moverse(37,39,40,38);
    tank.rotar(65,68);
    tank.diubujarTorreta();
}

if (keyIsDown(LEFT_ARROW)){
    this.currentTowerAngle = this.currentTowerAngle -1;
}
if (keyIsDown(RIGHT_ARROW)){
    this.currentTowerAngle = this.currentTowerAngle +1;
}
if (keyIsDown(87)){
    this.x = this.x + displacementX;
    this.y = this.y - displacementY;
}

translate (this.x,this.y)
rotate(this.currentBodyAngle);
this.dibujar();

rotate (this.currentTowerAngle);
this.diubujarTorreta();
this.dibujarTronco();