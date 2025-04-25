function clicou() {

    let comparar1 = parseInt(window.prompt("Digite um numero"));
    let comparar2 = parseInt(window.prompt("Digite outro numero"));

    if (comparar1 > comparar2) {
        window.alert(`O numero ${comparar1} é maior do que o ${comparar2}`);

    } else if (comparar1 < comparar2 ) {
        window.alert(`O numero ${comparar2} é maior do que o ${comparar1}`);

    } else {
        window.alert("Ambos os numeros são iguais");

    }
}