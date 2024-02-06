/*
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
(ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro, farà i suoi calcoli per capire se è palindroma o meno e ci restituirà true o false in base all'esito)
ATTENZIONE
No .reverse, .split e .join.
*/

const userWord = prompt("Inserisci una parola");






// funzione per capire se una parola è palindroma
// function isPalindrome(word) {
let isPalindrome = false;

for (let i = 0; i < userWord.length; i++) {
    if (userWord[i] == userWord[userWord.length - i - 1]) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }
}

if (isPalindrome) {
    console.log("La parola è palindroma")
} else {
    console.log("La parola non è palindroma");
}

// }