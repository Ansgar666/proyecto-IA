//Tu código va aquí. Recordad que teneis toda la documentacion en https://p5js.org/es/reference/
var ladrillos = [];
var bola2 = [];
function preload (){
    img = loadImage (`assets/bosque.avif`)
    img2 = loadImage (`assets/espada2.png`)
    img3 = loadImage (`assets/ladrillos.webp`)
    img4 = loadImage (`assets/pentagrama3.png`)
    img5 = loadImage(`assets/died.webp`)
    img6 = loadImage (`assets/goat.jpg`)  
    audio = createAudio (`assets/Marduk.mp3`)
    audio2 = createAudio (`assets/FreezingMoon.mp3`)
}
function setup() {
    //Este codigo se ejecuta 1 vez solamente, al principio
    
    createCanvas(1280, 720); 
    
    var x = 0;
    var y = 0;
   audio.play();
    for(let j = 0; j<3;j++){
        for (let index = 0; index < 10; index++) {
        rect(x,y,128,50)
        ladrillos.push({x:x,y:y,isBroken:false})
        x=x+128;
        }
        x=0;
        y=y+50;
    }
console.log ("Los ladrillos son :  ", ladrillos)
}
function redibujarLadrillos () {
    ladrillos.forEach (ladrillo => {
        if(!ladrillo.isBroken){
                image(img3,ladrillo.x,ladrillo.y,128,50)
        }
    })

}
function comprobarSiChocaConLadrillos(){
    ladrillos.forEach(ladrillo => {
        if(!ladrillo.isBroken){
            if ((ladrillo.y+50 == posYBola && posXBola >= ladrillo.x) && posXBola <= ladrillo.x +128 ){
                ladrillo.isBroken = true;
                vyBola = vyBola *-1;
                if(Math.random() > 0.5){let power = {
                    x:ladrillo.x + 64,
                    y:ladrillo.y,
                    w:20,
                    h:20
                }
                bola2.push(power);
            }
                
            }    
     }
    }   )
}

var posXPala = 610;
var posYPala = 680
var posXBola = 618;
var posYBola = 675;
var vxPala = 10;
var vxBola = 5;
var vyBola = -5;
var vyBola2 = 2;
var posYBola2 = 0;
var posXBola2 = 128;
function draw() {
    //Este codigo se ejecuta cada FRAME.
    background(img);
    redibujarLadrillos ();
    comprobarSiChocaConLadrillos();
    
    image(img4,posXBola, posYBola, 20, 20)
    image(img2,posXPala,posYPala, 90, 40, 20); 
    for (let i=0; i<bola2.length; i++){
        var power = bola2[i];
        image(img6,power.x, power.y, 40, 40);
        power.y = power.y + vyBola2
        power.x = power.x
        if(power.y == posYPala && (power.x >=posXPala && power.x <= posXPala+90)){
            vxPala = vxPala * 2;  
              
         }
    }
    
     if(posXBola<=0 || posXBola >=1280){
        vxBola = vxBola * -1;
    }
    if(posYBola<=0 ){
        vyBola=vyBola*-1;
    }
   
    if(posYBola ==720){
        image (img5,0,0,1280, 720);
        frameRate(0)
      audio.stop();
      audio2.play();
        alert ("Presiona espacio para reiniciar")
    }
    if(posYBola == posYPala && (posXBola >=posXPala && posXBola <= posXPala+90)){
        vyBola = vyBola * -1;
    }
    
    posXBola = posXBola + vxBola
    posYBola = posYBola + vyBola
 
    keydown();
}


function keydown() {
    if (keyIsDown (37) && posXPala > 0) {
      posXPala=posXPala-vxPala;
    } else if (keyIsDown (39) && posXPala < 1190) {
      posXPala=posXPala+vxPala;
    }
    if (keyIsDown (32) ){
       
        location.reload();
    
}
}
