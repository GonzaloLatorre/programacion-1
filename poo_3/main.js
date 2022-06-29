//importa el contenido del js cliente 
import Cliente from "./cliente.js";

//Dentro de la funcion se va a creer la instancia de cliente 
function guardar(){
    let nombre = document.getElementById("inp_nombre").value
    let apellido = document.getElementById("inp_apellido").value 
    let dni = document.getElementById("inp_dni").value


    //Ejecuta la funcion guardar_cliente.
    //new crea la instancia y invoca al constructor 
    let cliente = new Cliente(nombre,apellido,dni)
    cliente.guardar_cliente()
}

document.getElementById("btn_guardar").addEventListener("click",guardar)

function listar (){
    let cliente = new Cliente()
    cliente.obtener_clientes()
}
listar()

function eliminar()
{
    let indice = localStorage.getItem("indice")
    let cliente = new Cliente()
    cliente.eliminar_cliente(indice)
}

document.getElementById("btn-eliminar").addEventListener("click", eliminar)

function actualizar(){

    let index = localStorage.getItem("indice_update")
    
    let cliente = new Cliente()
    cliente.actualizar_cliente(index)

}
document.getElementById("btn_actualizar").addEventListener("click",actualizar)