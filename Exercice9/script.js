// votre code ici

let message = "";


document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.querySelector('#number1');
    const btn = document.querySelector('#calcBtn');
    const textArea = document.querySelector('#result');

    btn.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche la soumission du formulaire
        const number = parseInt(numberInput.value);
        if (!isNaN(number)) {
            textArea.value = checkAge(number); // Afficher les résultats dans le textarea
        } else {
            textArea.value = "Veuillez entrer un nombre valide";
        }
    });
});



function checkAge(age) {

    if (age < 18) {
        return "Vous êtes mineur.";
    } else if (age >= 65) {
        return "Vous êtes sénior.";
    }
    return "Vous êtes adulte.";


    if (age < 18) {
        return "Vous êtes mineur.";
    }
    if (age < 65) {
        return "Vous êtes majeur.";
    }
    return "Vous êtes sénior.";

}

export default checkAge;
