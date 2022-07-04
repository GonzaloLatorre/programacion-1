import Producto from "./productos.js";

function guardar (){

    let nombre = document.getElementById("inp_nombre").value
    let precio = document.getElementById("inp_precio").value 
    let imagen = document.getElementById("inp_imagen").value 
    let descripcion = document.getElementById("inp_descripcion").value

    let producto = new Producto(nombre, precio, imagen, descripcion)
    producto.guardar_producto()
}

document.getElementById("btn_guardar").addEventListener("click",guardar)

function listar (){
    let producto = new Producto()
    producto.obtener_productos()
}
listar()

function eliminar()
{
    let indice = localStorage.getItem("indice")
    let productos = new Producto()
    productos.eliminar_producto(indice)
}
document.getElementById("btn-eliminar").addEventListener("click", eliminar)

function actualizar(){

    let index = localStorage.getItem("indice_update")
    
    let producto = new Producto()
    producto.actualizar_producto(index)

}
document.getElementById("btn_actualizar").addEventListener("click",actualizar)