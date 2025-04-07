// creiamo prompt per chiedere parola

const userWord = prompt("inserisci un parola");

// funzione di reverse tramite ciclo per stabilire se la parola è palindroma attraverso un risultato booleano
// ciclo per leggere la parola
function wordLine(nameLine) {
  for (i = 0; i < nameLine.length; i++) {
    const currentWord = nameLine[i];
  }
  return currentWord;
}
const Word = wordLine(userWord);
console.log(Word);

// ciclo per leggere al contrario la parola
function wordRevers() {
  for (i = userWord.length - 1; i >= 0; --i) {
    const currentword = userWord[i];
  }
  return currentword;
}
const reversWord = wordRevers();
console.log(reversWord);

// validazione

if (wordLine === wordRevers) {
  alert("la parola è palindroma");
} else {
  alert(" la parola non è palindroma");
}

// const nameLine = "giulio";

// for (i = 0; i < nameLine.length; i++) {
//   const currentward = nameLine[i];

//   console.log(currentward);
// }
