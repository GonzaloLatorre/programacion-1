
//crea un array (arreglo)
let helados = ["Cereza","Banana Split","Dulce de leche"]

//motrar la longitud de arreglos (cantidad de elementos)
// ${variable} sirve para para usar variables dentro de un texto :)

console.log(`
    longitud =${helados.length} //3
`)

//acceso a un elemeto de un areglo mediante su indice 

//acceder al ultimo elemento 
let ultimo_elemento = helados[helados.length-1]
console.log(`
    Ultimo elemento: ${ultimo_elemento}
`)

//recorrer un arreglo haciendo uso de foreach

helados.forEach( (element, index) => {
    console.log(`
        ${index} - ${element}
    `)
});

//como agregar un elemento al final de un arreglo
helados.push("Pistacho")
console.log(helados)

//como eliminar el ultimo el elemento de un arreglo
helados.pop()
console.log(helados)

//como agregar un elemento al inicio de un arreglo
helados.unshift("Menta granizada")
console.log(helados)

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