// function per leggere parola al contrario
function wordRevers(nameLine) {
  let currentReverse = "";
  for (i = nameLine.length - 1; i >= 0; --i) {
    currentReverse = currentReverse + nameLine[i];
  }
  return currentReverse;
}
// creiamo prompt per chiedere parola
const userWord = prompt("inserisci un parola");

// validazione
const reversWord = wordRevers(userWord);
if (reversWord === userWord) {
  alert("la parola è palindroma");
} else {
  alert(" la parola non è palindroma");
}

console.log(reversWord);
console.log(userWord);
