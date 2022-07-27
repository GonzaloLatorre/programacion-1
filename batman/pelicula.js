export default class Batman {

    Title;
    Year;
    Poster;

    constructor(){}

    async mostrar_datos_pelicula()
    {
            const datos_recibidos = await fetch ('https://fake-movie-database-api.herokuapp.com/api?s=batman')
        
            const datos = await datos_recibidos.json()
        
            let lista_pelis =[]
        
            datos.Search.forEach(element => {
             
                const pelis = `
                <div class="col-lg-4 col-sm-6 col-4 mb-12 mt-5">
                    <div class="card" style="width: 15rem;">
                     <img src="${element.Poster}" class="card-img-top" style="height: 15rem;" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.Title}</h5>
                            <p class="card-text">${element.Year}</p>
                        </div>
                    </div>
                </div>
                `
                lista_pelis.push(pelis)
                console.log(element)
            });
            
          
            document.getElementById('batman').innerHTML = lista_pelis.join('')
        


    }

}