//funcion clàsica
function mostrar(){

    //forma 1
    //const nombre = document.querySelector("#inp_nombre").value

    //forma 2
    const nombre = document.getElementById("inp_nombre").value 

    //sintemplate string    
    const mensaje =`Nombre y Apallido: ${nombre}`

    alert(mensaje)
}

function mifuncion_con_retorno ()
{
    const ejemplo = 'Probando funcion con retorno'

    return ejemplo
}

function mostrar_respuesta()
{
    //acabo de ejecutar la funcion
    const respuesta 
    
    = mifuncion_con_retorno()
}

