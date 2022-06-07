let cripto = ['Bitcoin', 'Etherium', 'Tether', 'BNB', 'Cardano', 'Dai', 'Helium', 'Shiba Inu', 'Tron', 'Cronos', 'Solana']

//Agrego un elemento adelante del arreglo
cripto.unshift("Stellar")
console.log(cripto)

//Elimino dos elementos
cripto.splice(8,2)
console.log(cripto)

//Agrego un elemento al final del arreglo
cripto.push("Gate")
console.log(cripto)


const jijija =()=>{
    //Busco la posicion de un elemento
    let indice = cripto.indexOf("Helium")
   let final= cripto[cripto.length-1]
    document.getElementById('parrafo').textContent=`
    longitud =${cripto
.length}
    ultimo elemento = ${final}
    Posicion del elemento Helium = ${indice}
    `


}
const boton = document.getElementById("btn_mostrar")
boton.addEventListener('click',jijija)

const recorrer=()=>{
   
    let lista =[]

    cripto.forEach(cripto =>{

        let fila =`
        <li class="list-group-item">${cripto}</li>
        `

        lista.push(fila)
    })

    document.getElementById("cripto").innerHTML = lista.join('')
}
document.getElementById('btn_mostrar2').addEventListener('click', recorrer)
