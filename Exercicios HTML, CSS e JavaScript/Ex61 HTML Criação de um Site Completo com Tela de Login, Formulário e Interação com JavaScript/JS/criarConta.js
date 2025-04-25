function verificar() {

    let nome = document.querySelector("#nameRegistration").value;
    let senha = document.querySelector("#registrationPassword").value;

    if (nome === "" || senha === "") {
        window.alert("Error, preencha os campos de nome e senha, e tente novamente");
    } else {
        window.location.href = "./login.html";
        window.alert("Conta criada, você será direcionado(a) para página de login");
    }
}