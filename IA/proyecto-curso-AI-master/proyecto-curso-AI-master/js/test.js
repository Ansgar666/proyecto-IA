
//for (let i = 2; i <= 10; i++){
//if (i%2 ==0){
  //  alert (i); 
//}
//}

//function esPar (x){
    //if (x % 2 == 0){
     //return true;
    //} else {
     //   return false; 
    //}
//}
//let numeroAComprobar = 2;
//alert (esPar(numeroAComprobar))
//let variablePrimo = prompt ("Número")
//let variablePrimo = 2

function esPrimo(x){
for (let i = 2; i < x; i++){
    if (x%i == 0){
        return false
    }
}
return true;
}
 //alert("El numero"+variablePrimo+"sea primo es")
//+ esPrimo(variablePrimo)
let heAcabado = false;
let contador = 2;
let cuantosPrimosllevo = 0
while (!heAcabado){
    if(esPrimo(contador)){
        console.log(contador)
        cuantosPrimosllevo++;
    }
    if (cuantosPrimosllevo == 100){
        heAcabado = true;
    }
    contador++;
}
