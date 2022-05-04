let numeros =[5,2,88,14,22,7,6,42,47,34]

function copia (numeros){
    return numeros.slice();
}

function promedio(numeros){
    console.log(copia(numeros))
    let suma = 0

    numeros.forEach( element => {
     suma += element
    
    });

    console.log(
    suma
    )
    console.log(suma/numeros.length)
}


function promedio_rango (numeros, start, end){
    const rango = numeros.splice(start, end)
    let suma = 0

    rango.forEach(element => {
        suma += element
    });

    console.log(suma/rango.length)
    
}
promedio_rango(numeros, 0, 3)