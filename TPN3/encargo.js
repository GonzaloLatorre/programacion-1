export default class Encargo{
    obtener_productos(){
        let lista_productos = JSON.parse(localStorage.getItem("listado_productos"))
        let filas = []

        lista_productos.forEach((element,index) => {
            let fila = `
            <div class="col-sm-4">
                <div class="card">
                <img src="${element.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text">$${element.precio}</p>
                <p class="card-text">${element.descripcion}</p>
                <a href="#" onclick="guardar_indice_encargo(${index})" class="btn btn-primary btn_comprar">Comprar</a>
                </div>
                </div>
            </div>
            `
            filas.push(fila)
        });
        document.getElementById("cartas").innerHTML = filas.join('')


    }

    agregar_encargo(index){
        let lista_productos = JSON.parse(localStorage.getItem("listado_productos"))

        let nuevo_encargo = {
            nombre: lista_productos[index].nombre,
            precio: lista_productos[index].precio,
            imagen: lista_productos[index].imagen
        }
        if("listado_encargos" in localStorage){

            let lista_encargos = JSON.parse(localStorage.getItem("listado_encargos"))

            lista_encargos.push(nuevo_encargo)
            localStorage.setItem("listado_encargos",JSON.stringify(lista_encargos))

        }else{

            let lista_encargos = []
            lista_encargos.push(nuevo_encargo)
            localStorage.setItem("listado_encargos",JSON.stringify(lista_encargos))

        }
        this.obtener_productos()
        
    }

    obtener_encargo(){
        let lista_encargos = JSON.parse(localStorage.getItem("listado_encargos"))
        let filas = []

        lista_encargos.forEach((element,index) => {
            let fila = `
            <tr>
                <td>${element.nombre}</td>
                <td>${element.precio}</td>
                <td>
                    <img src="${element.imagen}" class="card-img-top" style="height: 8rem; width: 8rem;" alt="...">
                </td>
                <td>
                    <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                </td>
            </tr>
            `
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }

    eliminar_encargo(index)
    {
        let lista_encargos = JSON.parse(localStorage.getItem("listado_encargos"))
         
        lista_encargos.splice(index,1)

        localStorage.setItem("listado_encargos", JSON.stringify(lista_encargos))
    
        this.obtener_productos()
    }
}