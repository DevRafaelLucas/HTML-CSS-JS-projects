function verificarNota() {

    let nota = parseFloat(window.prompt("Qual a nota do aluno?"))
    
    if (nota >= 7) {
        window.alert("Aluno aprovado!")
    } else if (nota >= 5 && nota <= 6.9)  {
        window.alert("Aluno de recuperação...")        
    } else {
        window.alert("Aluno reprovado!")
    }
}