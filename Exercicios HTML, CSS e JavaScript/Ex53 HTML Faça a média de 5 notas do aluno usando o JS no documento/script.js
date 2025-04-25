function calcular() {

    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let num3 = parseFloat(document.getElementById('numero3').value);
    let num4 = parseFloat(document.getElementById('numero4').value);
    let num5 = parseFloat(document.getElementById('numero5').value);

    let resultado = ((num1 + num2 + num3 + num4 + num5)/5);
    
    document.getElementById(`resposta`).innerText = "A média das 5 notas do aluno é: " + resultado;
}