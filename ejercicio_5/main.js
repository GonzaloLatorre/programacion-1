const calcular_raices = (a,b,c) => {
    const bloque1 = Math.pow(b, 2)-4*a*c
    const raiz1 = -b + Math.sqrt(bloque1)
    const raiz2 = -b - Math.sqrt(bloque1)
    const denominador = 2*a

    const x1 = raiz1 / denominador
    const x2 = raiz2 / denominador

    return  `x1 = ${x1} x2 = ${x2}`

}

const mostrar_resultado = () => {
    const valor1 = parseInt(document.getElementById('inp_valor1').value)
    const valor2 = parseInt(document.getElementById('inp_valor2').value)
    const valor3 = parseInt(document.getElementById('inp_valor3').value)

    const respuesta = calcular_raices (valor1, valor2, valor3)

    document.getElementById('resultado').textContent = respuesta
}

    const btn_mostrar = document.getElementById('btn_mostrar')

    btn_mostrar.addEventListener('click', mostrar_resultado)