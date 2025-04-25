function alterarCor() {

    let elemento = document.querySelector(".minhaClasse");

    if (elemento.style.color === "red") {
        elemento.style.color = "black";
    } else {
        elemento.style.color = "red";
    }

}

