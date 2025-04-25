const tela = document.querySelector("#tela");
const botao = document.querySelector("#botao");
const texto = document.querySelector("#texto");

botao.addEventListener("click", function () {
    if (tela.style.backgroundColor === "white") {
        tela.style.backgroundColor = "black";
        texto.style.color = "white"
    } else {
        tela.style.backgroundColor = "white";
        texto.style.color = "black"
    }
})