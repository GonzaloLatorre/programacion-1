// declaramos la variable - inicializamos 
var num= 15;
alert(num)

// condicion 
if (num < 10) {
    console.log('Estas aprobado')
}else{
    console.log('Nos vemos en diciembre')
}

// Otra forma de expresar una conicion 
var respuesta =(num <=4) ? 'Nos vemos en marzo' : 'Nos vemos en diciembre'
console.log(respuesta)

/*
Diferencia entre let y var
*/

//Uso del var 
var x= 44;
if( x == 44){
    var x = 74 //misma variable 
    console.log(x) //74
}
console.log(x) //74

//Uso del let
let y = 11;
if (y == 11){
    let y = 22;
    console.log(y) //22
}
console.log(y) //11
