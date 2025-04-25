function verificarNumero() {
    let num = parseFloat(window.prompt("Digite um numero:"));

    if (num > 0) {
        window.alert("O numero é positivo")
    } else if (num = 0) {
        window.alert("O numero é neutro")
    } else {
        window.alert("O numero é negativo")
    }
}