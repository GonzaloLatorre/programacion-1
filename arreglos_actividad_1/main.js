let lenguajes = ["Python","JavaScript","Csharp","C++","Java","PHP","Ruby"]

lenguajes.push("Go")

lenguajes.shift()

lenguajes.unshift("Kotlin")

let indice = lenguajes.indexOf("Java")
lenguajes.splice(indice,2)

console.log(lenguajes)

const jijija =()=>{
    let tercero=lenguajes[2]
   let final= lenguajes[lenguajes.length-1]
    document.getElementById('parrafo').textContent=`
    longitud =${lenguajes.length}
    ultimo elemento = ${final}
    tercer elemento =${tercero}
    `


}
const boton = document.getElementById("btn_mostrar")
boton.addEventListener('click',jijija)

const recorrer=()=>{
    lenguajes.forEach((element) => {
        console.log(`
            Elemento del arreglo = ${element}
        `)
    });
}

boton.addEventListener('click', recorrer)