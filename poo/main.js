import Vehiculo from "./vehiculos.js";

const mostrar = () => {
    const km = document.getElementById("inp_km").value 
    const marca = document.getElementById("inp_marca").value

    //en new genera instancias y ejecuta el constructor 
    const auto = new Vehiculo(marca, km)
    auto.mostrar_datos_vehiculo()
}
document.getElementById("btn_mostrar").addEventListener("click",mostrar)
