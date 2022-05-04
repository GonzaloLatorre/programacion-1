
function calcular()
{
    // hago las cuentas del descuento y defino las marcas de los autos
    const auto = document.getElementById("inp_auto").value 
    if(auto=='Ford Ka'){
        const resultado= 1750000 - (15*1750000)/100

        document.getElementById("resultado").textContent = resultado
        
    }else{
        if(auto=='Ford Fiesta'){
        const resultado = 1950000 - (5*1950000)/100
        document.getElementById("resultado").textContent= resultado
        }else{
            if(auto=='Ford Focus'){
                const resultado = 2560000 - (10*2560000)/100
                document.getElementById("resultado").textContent= resultado
            }
                    
        }    

    }

}