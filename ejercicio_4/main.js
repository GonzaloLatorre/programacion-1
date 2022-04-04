const mostrar = () =>{

   const base_mayor = parseInt(document.getElementById("inp_BM").value)
   const base_menor = parseInt(document.getElementById("inp_Bm").value)
   const altura = parseInt(document.getElementById("inp_altura").value)

   const at = ((base_mayor + base_menor) * altura) / 2

   document.getElementById('resultado').textContent = `Resultado ${at}`
}

const btn_mostrar = document.getElementById('btn_mostrar')

btn_mostrar.addEventListener('click', mostrar)