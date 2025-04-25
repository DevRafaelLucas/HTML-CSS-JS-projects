function verificarNota() {

    let nota = parseFloat(window.prompt("Qual a nota do aluno?"));
    
    if (nota > 10) {
        window.alert("Aluno tem que mudar para Harvard University"); 

    } else if (nota >= 7 && nota <= 10) {
        window.alert("Aluno aprovado!")

    } else if (nota >= 5 && nota <= 6.9)  {
        window.alert("Aluno de recuperação...");

    } else if (nota <= 4.9 && nota >= 0) {
        window.alert("Aluno reprovado!");
       
    } else {
        window.alert("Aluno tem que ser expulso");   
    }
}