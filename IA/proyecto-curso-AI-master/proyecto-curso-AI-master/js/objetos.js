class Ladrillo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    isBroken = false;
    w = 128;
    h = 50;
    dibujar() {
       image (img3,this.x, this.y, this.w, this.h)
    }
    romper() {
        this.isBroken = true;
    }

}
class Powerup{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    w = 10;
    h =10;
    vy= 4 ;
    dibujar(){
        rect(this.x, this.y, this.w, this.h)
    }
    moverse(){
        this.y+=this.vy;
    }
    comprobarSiChocaConPala(pala){
        if (this.y == pala.y && (this.x >= pala.x && this.x <= pala.x + 60)) {

            console.log("powerup")
        }
    }
}
class Pala {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    w = 90;
    h = 20;
    dibujar() {
        image (img2,this.x, this.y, this.w, this.h)
    }
    moverse() {
        if (keyIsDown(37) && this.x > 0) {
            this.x = this.x - 10;
        }
        if (keyIsDown(39) && this.x < (1280 - 60)) {
            this.x = this.x + 10;
        }
    }
}
class Bola {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    w = 15;
    h = 15;
    vx = 2;
    vy = -2;
    dibujar() {
        image(img3,this.x, this.y, this.w, this.h)
    }
    moverse() {
        this.x += this.vx;
        this.y += this.vy;
    }
    comprobarSiChocaConPala(pala) {
        if (this.y == pala.y && (this.x >= pala.x && this.x <= pala.x + 60)) {
            this.vy = this.vy * -1;
        }
    }
    comprobarSiChocaConParedes() {
        //Aqui comprobamos si la bola choca con los bordes de la pantalla
        if (this.x <= 0 || this.x >= 1280) {
            this.vx = this.vx * -1;
        }
        if (this.y <= 0) {
            this.vy = this.vy * -1;

        }
        //Recargamos la ventana cuando la bola choca con el fondo
        if (this.y == 720) {
            background(img5)
            location.reload()
        }
    }
    comprobarSiChocaConLadrillo(ladrillo,arrayPowerups) {
        if (this.y == ladrillo.y && (this.x >= ladrillo.x && this.x <= ladrillo.x + 128)) {
            ladrillo.romper();
            if(Math.random() > 0.5){
            arrayPowerups.push(new Powerup(ladrillo.x+ladrillo.w/2, ladrillo.y));
            }
            this.vy = this.vy * -1;
        }        
    }

}
var arrayPowerup = []
var ladrillos = [];
var pala = new Pala(610, 700);
var bola = new Bola(640, 690);

function preload() {
    
        img = loadImage (`assets/bosque.avif`)
        img2 = loadImage (`assets/espada.png`)
        img3 = loadImage (`assets/ladrillo.png`)
        img4 = loadImage (`assets/pentagrama.png`)
        img5 = loadImage(`assets/died.webp`)

}
function setup() {
    background(220);

    createCanvas(1280, 720);
    var x = 0;
    var y = 0;
   //Este bucle anidado crea el array de ladrillos
    for(let j = 0; j<3;j++){
        for (let index = 0; index < 10; index++) {
            let ladrillo = new Ladrillo(x,y);
            ladrillos.push(ladrillo)
            x=x+128;   
        }
        x=0;
        y=y+50;
    }
}
function draw() {
    background(img);
    ladrillos.forEach(ladrillo => {
        if(!ladrillo.isBroken){
            ladrillo.dibujar();
            bola.comprobarSiChocaConLadrillo(ladrillo,arrayPowerup);
        }
    });
    arrayPowerup.forEach(powerup => {
        powerup.dibujar();
        powerup.moverse();
        powerup.comprobarSiChocaConPala(pala);
    });
    pala.dibujar();
    bola.dibujar();
    bola.moverse();
    pala.moverse();
    bola.comprobarSiChocaConPala(pala);
    bola.comprobarSiChocaConParedes();

}