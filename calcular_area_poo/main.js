//rectangulo 
import Rectangulo from "./rectangulo.js";

const mostrar = () =>{
    const base = document.getElementById("inp_base").value 
    const altura = document.getElementById("inp_altura").value

    const area = new Rectangulo(base, altura)
    area.area_rectangulo()
}
document.getElementById("btn_mostrar").addEventListener("click",mostrar)