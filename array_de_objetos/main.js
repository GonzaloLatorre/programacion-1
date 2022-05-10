//crear un arreglo de objetos 

let vehiculos = [
    {
        marca: 'Ford',
        modelo: 'Focus',
        anio: 2014,
        origen: 'Mercosur'
    },
    {
        marca: 'Volkswagen',
        modelo: 'Golft 1.4 TSI',
        anio: 2014,
        origen: 'Mexico'
    }
]

//recorrer un array de objetos 
vehiculos.forEach( (element,index) => {
    console.log(index+'-'+element.modelo)
});

//funciones asincronas - concepto de Async y Await

const recorrer = async () => {

//esto realiza una solicitud a peticio HTTP
//a traves del Metodo GET
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')

    const publicaciones = await respuesta.json()

    publicaciones.forEach(element => {
        console.log(element.title)
    });
}

const boton = document.getElementById("btn_ejecutar")
boton.addEventListener('click', recorrer)