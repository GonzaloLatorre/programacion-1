//Creando el array
let autos = ["Ford","Renault","Volkswagen","Seat","Peugeot","Chevrolet","Fiat","Toyota","Chery"]
//Mostrar la cantidad de elementos
console.log(`
    longitud =${autos.length} //9
`)
//Acceso a un elemento mediante su indice
let ultimo_elemento = autos[autos.length-1]
console.log(`
    Ultimo elemento: ${ultimo_elemento}
`)
//Recorrer un areglo
autos.forEach( (element, index) => {
    console.log(`
        ${index} - ${element}
    `)
});
//Agregando un elemento al final del arreglo
autos.push("Ferrari")
console.log(autos)
//Elimina el ultimo elemento de la array
autos.pop()
console.log(autos)
//Añade un nuevo elemento al principio
autos.unshift("Fitito")
console.log(autos)
//Elimina el primer elemento del array
autos.shift()
console.log(autos)
//Busca el indice del elemento seat
let indice = autos.indexOf("Seat")
console.log(
    `Posicion del elemento Seat = ${indice}`
)
//Elimina elementos a partir de la posicion indice antes encontrada contando a partir de la posicion danda
autos.splice(indice,1)
console.log(autos)
//Elimina 5 elementos a partir de la posicion 2
autos.splice(2,5)
console.log(autos)
//Añade un elemento al final
autos.push("Ford")
//En la ariable copia se ejecuta una copia de la array
let copia = autos.splice()
//Se añade un elemento al array copia
copia.push("Fiat")
//Se muestra la diferencia entre la coppia y el original (donde a copia se le agrego Fiat y al original no)
console.log(copia)
console.log(autos)

