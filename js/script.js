/*
Pari e Dispari
L’utente sceglie pari o dispari.
Inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.
*/

// salvo gli elementi del DOM
const yourNumberEl = document.getElementById("your-number");
const pcNumberEl = document.getElementById("pc-number");

const scoreEl = document.getElementById("score");
const resultEl = document.getElementById("result");




// salvo gli elementi bottoni
const evenEl = document.getElementById("even");
const oddEl = document.getElementById("odd");

// se l'utente sceglie pari
evenEl.addEventListener("click",
    function () {

        // chiedo all'utente un numero da 1 a 5
        const userNumber = Number(prompt("Inserisci un numero da 1 a 5"));

        // numero scelto
        console.log(userNumber);
        yourNumberEl.innerHTML = `Hai tirato ${userNumber}.`


        // numero scelto dal computer
        cpuNumber = randomNumber();
        console.log(cpuNumber);
        pcNumberEl.innerHTML = `Il computer ha tirato ${cpuNumber}.`


        // sommo i due numeri e li memorizzo in una variabile
        let score = sum(userNumber, cpuNumber);
        console.log(score);
        scoreEl.innerHTML = `La somma è ${score}.`


        // stabilisco se la somma è pari o dispari e la memorizzo in una variabile
        let result = isEvenOrOdd(score);

        console.log(isEvenOrOdd(score));

        // decreto vincita in caso di numero pari
        if (result == "even") {
            console.log("Pari! Hai vinto!");
            resultEl.innerHTML = `Pari! Hai vinto!`

        }
        else {
            console.log("Hai perso!");
            resultEl.innerHTML = `Dispari! Hai perso :c`
        }

    }
)

// se l'utente sceglie dispari
oddEl.addEventListener("click",
    function () {

        // chiedo all'utente un numero da 1 a 5
        const userNumber = Number(prompt("Inserisci un numero da 1 a 5"));

        // numero scelto
        console.log(userNumber);
        yourNumberEl.innerHTML = `Hai tirato ${userNumber}.`

        // numero scelto dal computer
        cpuNumber = randomNumber();
        console.log(cpuNumber);
        pcNumberEl.innerHTML = `Il computer ha tirato ${cpuNumber}.`


        // sommo i due numeri e li memorizzo in una variabile
        let score = sum(userNumber, cpuNumber);
        console.log(score);
        scoreEl.innerHTML = `La somma è ${score}.`

        // stabilisco se la somma è pari o dispari e la memorizzo in una variabile
        let result = isEvenOrOdd(score);

        console.log(isEvenOrOdd(score));

        // decreto vincita in caso di numero dispari
        if (result == "odd") {
            console.log("Dispari! Hai vinto!");
            resultEl.innerHTML = `Dispari! Hai vinto!`

        } else {
            console.log("Hai perso!");
            resultEl.innerHTML = `Pari! Hai perso :c`

        }

    }
)

// funzione che genera un numero casuale
function randomNumber() {
    return Math.floor(Math.random() * 5 + 1);
}

// funzione somma
function sum(a, b) {
    let z = a + b;
    return z;
}

function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}