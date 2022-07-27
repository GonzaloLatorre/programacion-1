import Encargo from "./encargo.js";

function listar(){
    let encargo = new Encargo()
    encargo.obtener_productos()
    encargo.obtener_encargo()
}

listar()

function agregar (){
    let encargo = new Encargo()
    const index = localStorage.getItem("indice_encargo")
    encargo.agregar_encargo(index)
}
for (const btn of document.getElementsByClassName("btn_comprar")){
    btn.addEventListener("click",agregar)
}

function eliminar()
{
    let indice = localStorage.getItem("indice")
    let encargo = new Encargo()
    encargo.eliminar_producto(indice)
}
document.getElementById("btn-eliminar").addEventListener("click", eliminar)
 