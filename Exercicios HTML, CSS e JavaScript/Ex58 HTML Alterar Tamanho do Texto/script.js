const texto = document.querySelector("#texto");
const botao = document.querySelector("#botao");

botao.addEventListener("click", function () {
    if (texto.style.fontSize === "100px") {
        texto.style.fontSize = "12px";
    } else {
        texto.style.fontSize = "100px";
    }
}
)