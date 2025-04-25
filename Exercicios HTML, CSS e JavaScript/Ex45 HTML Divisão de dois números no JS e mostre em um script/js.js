function clicou() {
    let num1 = parseFloat(window.prompt(`Digite um numero`))
    let num2 = parseFloat(window.prompt(`Digite outro numero`))

    resultado = num1 * num2

    window.alert(`${num1} X ${num2} = ${resultado}`)
}