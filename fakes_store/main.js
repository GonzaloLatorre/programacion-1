const producto = async () =>{

    const datos_recibidos = await fetch ('https://fakestoreapi.com/products/category/jewelery')

    const datos = await datos_recibidos.json()

    let lista_productos =[]

    datos.forEach(element => {
     
        const productos_todos = `
        <div class="col-lg-4 col-sm-6 col-12 mb-3 mt-5">
            <div class="card" style="width: 18rem;">
             <img src="${element.image}" class="card-img-top" style="height: 15rem;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `
    lista_productos.push(productos_todos)
    });
    
  
    document.getElementById('producto').innerHTML = lista_productos.join('')
}
producto()
