// PROMPT KM DA PERCORRERE
let km = prompt ("Inserisci i km da percorrere");

// PROMPT ETA
let eta = prompt("Inserisci la tua età");

// PREZZO BIGLIETTO
let cost = 0.21;

let price;

// CALCOLO DEL PREZZO
if (eta <= 18) {
    let sconto = cost * 0.2 * km;
    price = cost * km - sconto;

} 

else if ((eta >= 19) && (eta <= 64)) {
    price = cost * km;
}

else {
    sconto = cost * 0.4 * km;
    price = cost * km - sconto;
}

// PREZZO DEL BIGLIETTO IN CONSOLE.LOG
price = price.toFixed(2);
console.log(price);