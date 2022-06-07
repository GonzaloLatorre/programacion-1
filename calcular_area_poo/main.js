//rectangulo 
import Rectangulo from "./rectangulo.js";

const mostrar = () =>{
    const base = parseInt(document.getElementById("inp_base").value ) 
    const altura = parseInt(document.getElementById("inp_altura").value) 

    const rectangulo = new Rectangulo(base, altura)
    const area = rectangulo.area_rectangulo()

    document.getElementById('area1').textContent =`
    el area del rectanguro es de ${area}
    `
    console.log(area)
}

document.getElementById("btn_mostrar").addEventListener("click",mostrar)

//trapecio
import Trapecio from "./trapecio.js";

const mostrar1 = () =>{
    const base_M = parseInt(document.getElementById("inp_base_M").value ) 
    const base_m = parseInt(document.getElementById("inp_base_m").value) 
    const altura = parseInt(document.getElementById("inp_altura_trapecio").value) 

    const trapecio = new Trapecio(base_M, base_m, altura)
    const area = trapecio.area_trapecio()

    document.getElementById('area3').textContent =`
    el area del trapecio es de ${area}
    `
    console.log(area)
}

document.getElementById("btn_mostrar_trapecio").addEventListener("click",mostrar1)

//rectangulo 
import Triangulo from "./triangulo.js";

const mostrar2 = () =>{
    const base = parseInt(document.getElementById("inp_base_triangulo").value ) 
    const altura = parseInt(document.getElementById("inp_altura_triangulo").value) 

    const triangulo = new Triangulo(base, altura)
    const area = triangulo.area_triangulo()

    document.getElementById('area2').textContent =`
    el area del triangulo es de ${area}
    `
    console.log(area)
}

document.getElementById("btn_mostrar_triangulo").addEventListener("click",mostrar2)