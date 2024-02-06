/*
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
(ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro, farà i suoi calcoli per capire se è palindroma o meno e ci restituirà true o false in base all'esito)
ATTENZIONE
No .reverse, .split e .join.
*/

// salvo gli elementi del DOM
const resultEl = document.getElementById("result");

// chiedo all'utente di scrivere una parola
const userWord = prompt("Inserisci una parola");

isPalindrome(userWord);

// funzione per capire se una parola è palindroma
function isPalindrome(word) {

    // inizializzo il flag su true
    let isWordPalindrome = true;

    for (let i = 0; i < word.length; i++) {
        if (word[i] != word[word.length - i - 1]) {

            // se non è palindroma modifico il flag su false
            isWordPalindrome = false;
        }
    }

    // stampo la parola al contrario
    /*
     for (let i = word.length - 1; i > -1; i--) {
         console.log(word[i]);
     }
     */

    console.log(word);

    // se la parola è palindroma
    if (isWordPalindrome) {
        console.log("La parola è palindroma");
        resultEl.innerHTML = `Hai scritto <strong>"${word}"</strong>.<br>La parola è palindroma!`;

    } else {
        // se non lo è
        console.log("La parola non è palindroma");
        resultEl.innerHTML = `Hai scritto <strong>"${word}"</strong>.<br>La parola non è palindroma.`;
    }

}