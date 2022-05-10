//crear un objeto

const miobjeto ={
    nombre: 'Juan',
    apellido: 'Perez',
    dni: 45471436,
    correos: {
        gmail: 'jp@gmail.com',
        outlook: 'jp@outlook.com',
        yahoo: 'jp@yahoo.com.ar'
    }

}

console.log(miobjeto.apellido)

//mostrar los correos 

//const gmail = miobjeto.correos.gmail;
//const outlook = miobjeto.correos.outlook;
//const yahoo = miobjeto.correos.yahoo;

//Destructuring Object

const { gmail, outlook, yahoo } = miobjeto.correos;

console.log(`
    correos:

    gmail: ${gmail}
    outlook: ${outlook}
    yahoo: ${yahoo}
`)