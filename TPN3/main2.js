obtener_productos()
{
    let lista_productos = JSON.parse(localStorage.getItem("listado_productos"))
    let tablas = []

    lista_productos.forEach((element,index) => {
        let tabla = `
        <tr>
            <td>${index}</td>
            <td>${element.nombre}</td>
            <td>${element.precio}</td>
            <td>
                <img src="${element.imagen}" class="card-img-top" style="height: 8rem; width: 8rem;" alt="...">
            </td>
            <td>${element.descripcion}</td>
            <td>
                <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                <button onclick="editar(${index})" class= "btn btn-primary btn-sm"><i class="fa fa-edit"></i></button>
            </td>
        </tr>
        `
        tablas.push(tabla)
    });
    document.getElementById("tbody").innerHTML = tablas.join('')
}