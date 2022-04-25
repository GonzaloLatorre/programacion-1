const mostrar = () => {
    const temperatura= parseInt(document.getElementById("inp_f").value )
    if(temperatura>=14 && temperatura<32){
        const resultado=("temperatura baja")
        document.getElementById("resultado").textContent = resultado

    }else{
        if(temperatura>=32 && temperatura<68){
            const resultado=("temperatura adecuada")
            document.getElementById("resultado").textContent = resultado
        }else{
            if(temperatura>=68 && temperatura<96){
                const resultado=("temperatura alta")
                document.getElementById("resultado").textContent = resultado
            }else{
                const resultado=("temperatura desconocida")
            }
           
        }
    }
    

}
    const boton = document.getElementById("btn_mostrar")
    boton.addEventListener("click", mostrar)
    

