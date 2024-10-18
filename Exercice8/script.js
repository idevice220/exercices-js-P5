//Votre code ici

document.addEventListener('DOMContentLoaded', () => {
    const numberInput1 = document.getElementById('input'); // Suppression du #
    const numberInput2 = document.getElementById('input2');
    const btn = document.querySelector('#button');
    const textArea = document.querySelector('#result');

    btn.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche la soumission du formulaire
        textArea.value = add(numberInput1.value, numberInput2.value);

    });
});

function add(a, b) {
    const number1 = parseFloat(a);
    const number2 = parseFloat(b);

    if (!isNaN(number1) && !isNaN(number2)) { // Vérification correcte
        return number1 + number2;
    }
    return "Veuillez entrer un nombre valide";
}

export default add;

