function almacenar_indice(index)
{
    localStorage.setItem("indice",index)
}

function editar(index)
{
    let listado_productos = JSON.parse(localStorage.getItem("listado_productos"))

    document.getElementById("inp_nombre").value = listado_productos[index].nombre
    document.getElementById("inp_precio").value = listado_productos[index].precio
    document.getElementById("inp_imagen").value = listado_productos[index].imagen
    document.getElementById("inp_descripcion").value = listado_productos[index].descripcion

    //guadamos en el storage el indice del cliente que queremos editar (actualizar)
    localStorage.setItem("indice_update",index)

    //encendemos el boton actualizar
    document.getElementById("btn_actualizar").style.display = "block"
    document.getElementById("btn_guardar").style.display = "none"
}

function guardar_indice_encargo(index){

    localStorage.setItem("indice_encargo",index)
}