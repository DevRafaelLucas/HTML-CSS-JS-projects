function acao() {
    
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);

   sub = num1 - num2;

    document.getElementById('resultado').innerText = 'A subtração é: ' + sub;

}