function calcular_potencia ()
{
   const tension = document.getElementById("inp_tension").value 
   
   const corriente = document.getElementById("inp_corriente").value 

   const potencia = corriente* tension
   return potencia

}

function mostrar()
{
    const respuesta= calcular_potencia()
    
    alert(respuesta)
}