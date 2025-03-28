const varTexto = document.querySelector("#titulo_texto");
const varBotao = document.querySelector("#titulo_botao");
const varTela = document.querySelector("#titulo_tela");
const varImg = document.querySelector("#titulo_img");

varBotao.addEventListener("click",

    function () {
        if (varBotao.textContent === "Ligado") {
            varBotao.textContent = "Desligado";
            varTexto.style.color = "white";
            varTela.style.backgroundColor = "grey";
            varImg.src = "lampada-desligada.png"


        } else {
            varBotao.textContent = "Ligado";
            varTexto.style.color = "grey";
            varTela.style.backgroundColor = "white";
            varImg.src = "lampada-ligada.png"
        }
    }
)