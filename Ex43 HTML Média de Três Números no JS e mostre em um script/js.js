function mediaNumeros() {

    let numero1 = parseFloat(window.prompt(`Digite um numero`))
    let numero2 = parseFloat(window.prompt(`Digite outro numero`))
    let numero3 = parseFloat(window.prompt(`Digite ultimo numero`))

    resultado = (numero1 + numero2 + numero3)/3

    window.alert(`A média dos valores é igual a: ${resultado}`)

}