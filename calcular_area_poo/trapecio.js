export default class Trapecio{

    base_M;
    base_m;
    altura;

    constructor(a,b,c){
        this.base_M = a
        this.base_m = b
        this.altura = c
    }

    area_trapecio(){
           const area = ((this.base_M + this.base_m) * this.altura)/2
           return area
    }
}