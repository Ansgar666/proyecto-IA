/*let arr = [];
    for (let i = 0; i < 10; i ++){
        arr.push([])
    
    
    for (let j = i * 10; j < (i*10)+10; j++){
        arr[i].push(j)
    }
    }
    
    console.log (arr)*/
    
    let arr = [];  
    

        for (let i = 0; i <3; i ++){
            let pais = prompt("Nombre del pais nº" + (i+1))
            arr[pais] = []
            for (let j = 0; j < 3; j++){
                let ciudad = prompt ("Nombre ciudad nº"+(j+1)+" de " + pais)
                arr[pais].push(ciudad)
            }
        }
        console.log(arr)
