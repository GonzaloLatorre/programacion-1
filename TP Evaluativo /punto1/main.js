
function calcular()
{
    const auto = document.getElementById("inp_auto").value 
    if(auto=='Ford Ka'){
        const resultado= (15*1750000)/100

        document.getElementById("resultado").textContent = resultado
        
    }else{
        if(auto=='Ford Fiesta'){
        const resultado = (5*1950000)/100
        document.getElementById("resultado").textContent= resultado
        }else{
            if(auto=='Ford Focus'){
                const resultado = (10*2560000)/100
                document.getElementById("resultado").textContent= resultado
            }
                    
        }    

    }

}