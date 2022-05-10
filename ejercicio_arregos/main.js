let numeros = [1,2,3,4,5,6,7]

function cambio_posicion(){
    const inp_1 = parseInt(document.getElementById("inp_1").value)
    const inp_2 = parseInt(document.getElementById("inp_2").value)

    const elemento1 = numeros[inp_1]
    console.log(elemento1)

    const elemento2 = numeros[inp_2]
    console.log(elemento2)

    numeros[inp_1] = elemento2
    numeros[inp_2] = elemento1

    document.getElementById("num").textContent = numeros
}
