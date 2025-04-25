function verificar() {

    let nome = document.querySelector("#username").value;
    let senha = document.querySelector("#password").value;

    if (nome === "" || senha === "") {
        window.alert("Error, preencha os campos de nome e senha, e tente novamente");
    } else {
        window.location.href = "./index.html";
        window.alert("Login feito com sucesso!");
    }
}