const valor = prompt("ingrese una nota")

var respuesta =(valor >=7) ? 'Aprobado' : 'Desaprobado'
console.log(respuesta)

// se imprime en la pantalla 
document.write(valor)

//template string. Es una platilla para desarrollar barias lineas de codigo
console.log(`
    Tu calificacion en el taller
    de Programacion 1 es: ${valor}
`)

