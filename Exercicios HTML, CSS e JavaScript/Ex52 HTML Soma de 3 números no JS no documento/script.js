function calcular() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);

    let multiplicado = num1 * num2;

    document.getElementById(`resultado`).innerText = "A multiplicação dos numeros é: " + multiplicado;

}