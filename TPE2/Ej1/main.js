const dolar = async ()=>{

    const datos_recibidos = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')

    const datos = await datos_recibidos.json()


    let lista_dolar = []

    
    datos.forEach(usuario => {
        let fila = `<tr>
                        <td>${usuario.casa.nombre}</td>
                        <td>${usuario.casa.compra}</td>
                        <td>${usuario.casa.venta}</td>
                    </tr>`
        lista_dolar.push(fila)
    });

    document.getElementById("tbl_body").innerHTML = lista_dolar.join('')

}

dolar()