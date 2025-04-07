// scelta utente pari o disari
const parDispUser = prompt("pari o dispari ?");
// l'user sceglie un numero
const userNumber = parseInt(prompt("scegli un numero da 1 a 5"));
// funzione per numero randomico pc
function randomPc(max, min = 1) {
  const randomPcnumber = Math.floor(Math.random() * (max - min)) + min;

  return randomPcnumber;
}

console.log(randomPc(5));
