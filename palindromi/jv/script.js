// creiamo prompt per chiedere parola

const userWard = prompt("inserisci un parola");

// funzione di reverse tramite ciclo per stabilire se la parola è palindroma attraverso un risultato booleano
// ciclo per leggere la parola
function wardLine(nameLine) {
  let currentward;
  for (i = 0; i < nameLine.length; i++) {
    const currentward = nameLine[i];
  }
  return currentward;
}
const Ward = wardLine(userWard);
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

// validazione

if (wardLine === wardRevers) {
  alert("la parola è palindroma");
} else {
  alert(" la parola non è palindroma");
}
