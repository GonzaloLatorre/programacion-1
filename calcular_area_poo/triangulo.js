export default class Triangulo{

    base;
    altura;

    constructor(a, b){
        this.base = a
        this.altura = b
    }

    area_triangulo(){
           const area = (this.base * this.altura) / 2
           return area
    }

}