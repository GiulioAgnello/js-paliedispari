// scelta utente pari o disari
const parDispUser = prompt("pari o dispari ?");
// l'user sceglie un numero
const userNumber = parseInt(prompt("scegli un numero da 1 a 5"));
// variabili per pari e dispari
const pari = true;

// funzione per numero randomico pc
function randomPc(max, min = 1) {
  const randomPcnumber = Math.floor(Math.random() * (max - min)) + min;

  return randomPcnumber;
}
const pcNumber = randomPc(5);
console.log("pc number", pcNumber);
console.log("user number", userNumber);
// sommiamo i due nuemeri

sumNumber = userNumber + pcNumber;

console.log("somma", sumNumber);
console.log("pari o dispari giocatore =", parDispUser);

const pariPc = sumNumber % 2 === 0;

console.log(pariPc);

const pariUser = "pari" === true;

console.log(pariUser);

if (pariPc === pariUser) {
  alert("hai vinto");
} else {
  alert("hai perso");
}

// if (sumNumber % 2 === 0 : ) {
//   alert("pari");
// } else {
//   alert("dispari");
// }
