function cuenta (a,b){
    //hago la potencia de los catetos a y b
    const altura= Math.pow(a, 2);
    const base= Math.pow(b, 2);
    //sumo las potencias
    const AB= altura+base
    //hago la raiz de la suma 
    const c= Math.sqrt(AB);
    //devuelvo la constate c
    return c
}
    
function resultado(){
    //uso los numeros dados por el usuario 
    const a= parseInt(document.getElementById('inp_a').value)
    const b= parseInt(document.getElementById('inp_b').value)

    //tomo el resultado de la funcion anterior
    const respuesta= cuenta(a,b)

    //muestro el resultado
    document.getElementById('respuesta').textContent = `${respuesta}`
}