// PROMPT KM DA PERCORRERE
let km = prompt ("Inserisci i km da percorrere");

// PROMPT ETA
let eta = prompt("Inserisci la tua età");

// PREZZO BIGLIETTO
let cost = 0.21;

let price;
// let n = price.toFixed(2);

// CALCOLO DEL PREZZO
if (eta <= 18) {
    let sconto = cost * 0.2 * km;
    price = cost * km - sconto;

    if ((eta >= 19) && (eta <= 64)) {
        price = cost * km;
    }

}
if (eta >= 65) {
    sconto = cost * 0.4 * km;
    price = cost * km - sconto;
}

// PREZZO DEL BIGLIETTO IN CONSOLE.LOG
console.log(price);