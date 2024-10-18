document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.querySelector('#number1');
    const btn = document.querySelector('#calcBtn');
    const textArea = document.querySelector('#result');

    btn.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche la soumission du formulaire
        const number = parseInt(numberInput.value);
        if (!isNaN(number)) {
            textArea.value = printNumbers(number); // Afficher les résultats dans le textarea
        } else {
            textArea.value = "Veuillez entrer un nombre valide";
        }
    });
});

function printNumbers(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += i + ' ';
    }
    return result.trim();
}

export default printNumbers;
