const cripto = async () =>{

    const datos_recibidos = await fetch(' https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

    const datos = await datos_recibidos.json()

    let lista_moneda = []

    datos.forEach(moneda => {
        let fila = `<tr>
                        <td>$<img src="${moneda.image}" class="img-fluid"></img></td>
                        <td>${moneda.name}</td>
                        <td>${moneda.symbol}</td>
                        <td>${moneda.current_price}</td>
                        <td>${moneda.price_change_percentage_24h}</td>
                        <td>${moneda.total_volumen}</td>
                    </tr>`
        lista_moneda.push(fila)
    });

    document.getElementById("tbl_body").innerHTML = lista_moneda.join('')
}

cripto()