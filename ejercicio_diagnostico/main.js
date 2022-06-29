let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let pares = []

numeros.forEach(numeros => {
    if(numeros%2 == 0){
        pares.push(numeros)
    }
});
console.log(numeros)
console.log(pares)

let numeros2 = []

for (const value of numeros.splice(2,6)) {

   numeros2.push(value)
    
}
console.log(numeros2)
