function adicao() {

    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);

    sub = num1 + num2;

    if (sub) {
        document.getElementById('resultado_adicao').innerText = num1 + ' + ' + num2 + ' = ' + sub;
    } else {
        document.getElementById('resultado_adicao').innerText = 'houve algum erro, digite os numeros e tente novamente';
    }
}


function subtracao() {

    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);

    sub = num1 - num2;

    if (sub) {
        document.getElementById('resultado_subtracao').innerText = num1 + ' - ' + num2 + ' = ' + sub;
    } else if (sub == 0) {
        document.getElementById('resultado_subtracao').innerText = num1 + ' - ' + num2 + ' = ' + sub;
    } else {
        document.getElementById('resultado_subtracao').innerText = 'houve algum erro, digite os numeros e tente novamente';
    }
}


function multiplicacao() {

    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);

    sub = num1 * num2;

    if (sub) {
        document.getElementById('resultado_multiplicacao').innerText = num1 + ' x ' + num2 + ' = ' + sub;
    } else {
        document.getElementById('resultado_multiplicacao').innerText = 'houve algum erro, digite os numeros e tente novamente';
    }

}


function divisao() {

    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);

    sub = num1 / num2;

    if (sub) {
        document.getElementById('resultado_divisao').innerText = num1 + ' / ' + num2 + ' = ' + sub;
    } else {
        document.getElementById('resultado_divisao').innerText = 'houve algum erro, digite os numeros e tente novamente';
    }

}