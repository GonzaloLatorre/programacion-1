const consumir_datos =  async () =>{

    const datos_recibidos = await fetch('https://jsonplaceholder.typicode.com/users')

    const datos = await datos_recibidos.json()
    
    let lista_usuario = []

    datos.forEach(usuario => {
        let fila = `<tr>
                        <td>${usuario.name}</td>
                        <td>${usuario.email}</td>
                        <td>${usuario.website}</td>
                    </tr>`
        lista_usuario.push(fila)
    });

    document.getElementById("tbl_body").innerHTML = lista_usuario.join('')
}

//invocamos o ejecutamos a la funcion flecha consumir_datos()
consumir_datos()