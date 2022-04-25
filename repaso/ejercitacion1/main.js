function calcular_temperatura(temperatura)
{

    const fahrenheit = (temperatura*1.8) + 32
    
    return fahrenheit
}

function mostrar()
{
    const celcius = parseInt(document.getElementById("inp-celcius").value) 

    const respuesta= calcular_temperatura(celcius)
    
    alert(respuesta)
}

    const btn_mostrar =document.getElementById("mostrar")

    btn_mostrar.addEventListener("click",mostrar)