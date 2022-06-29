export default class Cliente {

//Constructor es un metodo que se ejecuta cuando se hace una instacia.
    constructor(nom,ape,dni){//-->se llama argumento
    //this es un atributo que pertenece a la clase  
    this.nombre = nom
    this.apellido = ape
    this.dni = dni
    }

    guardar_cliente(){

        let nuevo_cliente ={
            nombre: this.nombre,
            apellido: this.apellido,
            dni: this.dni
        }

        //se una para preguntar si existe la palabra en el LocalStorage
        if("listado_clientes" in localStorage){
            //getItem sirve para obtener el item en este caso "listado_clientes"
            //JSON.parse pasa el contenido a un array
            let lista_clientes = JSON.parse(localStorage.getItem("listado_clientes")) 
            lista_clientes.push(nuevo_cliente)
            localStorage.setItem("listado_clientes",JSON.stringify(lista_clientes))//JSON.stringify sirve para transformar el mansaje en JSON
        }else{
            //Si no existe el elemento llama al creado nuevo_cliente
            let lista_clientes =[]
            lista_clientes.push(nuevo_cliente)
            
            //crear el sector de almacenamiento 
            localStorage.setItem("listado_clientes", JSON.stringify(lista_clientes))
        }
        //invocando al metodo obtener_clientes()
        this.obtener_clientes()
        this.vaciar_formulario()
    }

    obtener_clientes()
    {
        let lista_clientes = JSON.parse(localStorage.getItem("listado_clientes"))

        let filas =[]

        lista_clientes.forEach((element,index) => {
            let fila = `
                <tr>
                    <td>${element.nombre}</td>
                    <td>${element.apellido}</td>
                    <td>${element.dni}</td>
                    <td>
                        <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                        <button onclick="editar(${index})" class= "btn btn-primary btn-sm"><i class="fa fa-edit"></i></button>
                    </td>
                </tr>`
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }

    eliminar_cliente(index)
    {
        let lista_clientes = JSON.parse(localStorage.getItem("listado_clientes")) 
    
        lista_clientes.splice(index,1)
    
        localStorage.setItem("listado_clientes", JSON.stringify(lista_clientes))
    
        this.obtener_clientes()
    }

    actualizar_cliente(index){
        //fui a buscar el listado de clientes al storage
        let listado_clientes = JSON.parse(localStorage.getItem("listado_clientes"))

        listado_clientes[index].nombre = document.getElementById("inp_nombre").value 
        listado_clientes[index].apellido = document.getElementById("inp_apellido").value
        listado_clientes[index].dni = document.getElementById("inp_dni").value

        localStorage.setItem("listado_clientes", JSON.stringify(listado_clientes))

        //volvemos a reconstruir la tabla 
        this.obtener_clientes()
        this.actualizar_cliente()

        document.getElementById("btn_guardad").style.display = "block"
        document.getElementById("btn_actualizar").style.display = "none"
    }

    vaciar_formulario()
    {
        document.getElementById("form_cliente").reset()
    }
}
