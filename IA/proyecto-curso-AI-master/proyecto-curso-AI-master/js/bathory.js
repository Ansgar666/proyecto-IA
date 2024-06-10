function setup (){
    createCanvas (1280,720,WEBGL)
    

}
function draw (){
    background (246,221,204)
    fill (192,57,43)
    orbitControl()
    triangle (150,350,240,100,250,350)
    triangle (350,550,440,300,450,550)
    box()
}