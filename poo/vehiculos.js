//sirve para ser vista y exportada desde otro archivo 
export default class Vehiculo {

    marca; 
    km;

 // es el primer metodo que hay dentro de una clase 
    constructor(m,k){
        this.marca = m
        this.km = k 
    }

    mostrar_datos_vehiculo(){
        console.log(`
            Marca: ${this.marca}
            Kilometraje: ${this.km}
        `)
    }
}