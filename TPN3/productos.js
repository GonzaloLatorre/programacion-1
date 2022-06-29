export default class Producto {

    constructor (nom,pre,img,desc){

        this.nombre = nom
        this.precio = pre
        this.imagen = img
        this.descripcion = desc

    }

    guardar_producto(){

        let nuevo_producto = {

            nombre: this.nombre,
            precio: this.precio,
            imagen: this.imagen,
            descripcion: this.descripcion

        }

        if("listado_productos" in localStorage){

            let lista_productos = JSON.parse(localStorage.getItem("listado_productos"))

            lista_productos.push(nuevo_producto)
            localStorage.setItem("listado_productos",JSON.stringify(lista_productos))

        }else{

            let lista_productos = []
            lista_productos.push(nuevo_producto)
            localStorage.setItem("listado_productos",JSON.stringify(lista_productos))

        }
        this.obtener_productos()
    }

    obtener_productos()
    {
        let lista_productos = JSON.parse(localStorage.getItem("listado_productos"))
        let filas = []

        lista_productos.forEach((element,index) => {
            let fila = `
            <tr>
                <td>${index}</td>
                <td>${element.nombre}</td>
                <td>${element.precio}</td>
                <td>${element.imagen}</td>
                <td>${element.descripcion}</td>
                <td>
                    <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                    <button onclick="editar(${index})" class= "btn btn-primary btn-sm"><i class="fa fa-edit"></i></button>
                </td>
            </tr>
            `
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }

}