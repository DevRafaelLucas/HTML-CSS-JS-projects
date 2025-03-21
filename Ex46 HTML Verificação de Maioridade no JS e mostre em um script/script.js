function IdadeDigitada() {
    let ageUser = parseFloat(window.prompt(`Digite sua idade:`))

    if (ageUser >= 18) {
        window.alert(`Você é maior de 18 anos :D`)
    } else {
        window.alert(`Desculpa, você é menor de 18 anos`)
    }
}