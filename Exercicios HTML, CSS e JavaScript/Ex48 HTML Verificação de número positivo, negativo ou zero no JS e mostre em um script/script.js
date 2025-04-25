function verificarNumero() {

    let num = parseInt(window.prompt("Digite um numero para verificação:"));

    if (num % 2 == 0) {
        window.alert("O numero é par");
    } else {
        window.alert("O numero é impar");
    }
}