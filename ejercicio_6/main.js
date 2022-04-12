let autos = ["Ford","Renault","Volkswagen","Seat","Peugeot","Chevrolet","Fial","Toyota","Chery"]

console.log(`
    longitud =${autos.length} //9
`)

let ultimo_elemento = autos[autos.length-1]
console.log(`
    Ultimo elemento: ${ultimo_elemento}
`)

autos.forEach( (element, index) => {
    console.log(`
        ${index} - ${element}
    `)
});

autos.push("Ferrari")
console.log(autos)

helados.pop()
console.log(autos)

helados.unshift("Fitito")
console.log(autos)

//como eliminar el primer elemento de un array
helados.shift()
console.log(helados)

//como encontrar los indices de un elemento de un array
let indice = helados.indexOf("Banana Split")
console.log(`
    Posicion del elemento Banana Split = ${indice}
`)

//eliminar un elemento segun su indice
helados.splice(indice,1)
console.log(helados)

//eliminar varios elementos de un arreglo
helados.splice(0,2)
console.log(helados)

//copiar un arreglo
helados.push("Marroc")

//aca comienza la copia
//["Marroc"]
let copia = helados.slice()
copia.push("Chocolate")

console.log(copia)
console.log(helados)

