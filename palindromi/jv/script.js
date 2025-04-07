// creiamo prompt per chiedere parola

const userWard = prompt("inserisci un parola");

// funzione di reverse tramite ciclo per stabilire se la parola è palindroma attraverso un risultato booleano
// ciclo per leggere la parola
function wardLine() {
  let currentward;
  for (i = 0; i < userWard.length; i++) {
    const currentward = userWard[i];
  }
  return currentward;
}
const Ward = wardLine();
console.log(Ward);

// ciclo per leggere al contrario la parola
function wardRevers() {
  let currentward;
  for (i = userWard.length - 1; i >= 0; --i) {
    const currentward = userWard[i];
  }
  return currentward;
}
const reversWard = wardRevers();
console.log(reversWard);
