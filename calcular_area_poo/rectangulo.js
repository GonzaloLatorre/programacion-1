export default class Rectangulo{

    base;
    altura;

    constructor(b,a){
        this.base = b
        this.altura = a
    }

    area_rectangulo(){
        console.log(`
           area = ${this.base * this.altura} 
        `)
    }
}