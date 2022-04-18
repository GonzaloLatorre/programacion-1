
    const calcular = (lado1, lado2, lado3) =>{
        //Hago la cuenta
        const resultado = lado1+lado2+lado3
    
        return resultado
    }

const mostrar = () =>{
    const lado1 = parseInt(document.getElementById("inp_lado1").value)

    const lado2 = parseInt(document.getElementById("inp_lado2").value)

    const lado3 = parseInt(document.getElementById("inp_lado3").value)

    const respuesta = calcular(lado1, lado2, lado3)
    //Muesro el resultado
    const h_respuesta = document.getElementById("respuesta")
    respuesta==180 ? h_respuesta.textContent = 'Es valido' : h_respuesta.textContent = 'No es valido'
    console.log(respuesta)

}
    //Llamo al boton 
    const btn_mostrar =document.getElementById("mostrar")

    btn_mostrar.addEventListener("click",mostrar)
