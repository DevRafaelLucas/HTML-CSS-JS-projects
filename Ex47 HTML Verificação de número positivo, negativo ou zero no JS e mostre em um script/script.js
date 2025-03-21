function verificarNumero() {
    let verif = parseFloat(window.prompt(`Digite um numero:`))

    if (verif >= 0) {
        window.alert(`Este numero é positivo`)
    } else {
        window.alert(`Este numero é negativo`)
    }
}