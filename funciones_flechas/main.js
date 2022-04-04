const mostrar = () => {

    document.getElementById("inp_dato").value = 10
    document.getElementById("h_titulo").textContent=`Probando el valor flecha`
}

//Obtengo el elemento boton
const dato = document.getElementById("btn_mostrar")

//Indicamos el evento a escuchar (en este click)
//Entonces cuando se haga click se invocara a la función mostrar
dato.addEventListener("click", mostrar)

