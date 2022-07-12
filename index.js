const x_0 = "BABBABAB";
const x_1 = "BABBAABA";

const i = 44;

/* Funkcja licząca ilość występień 'ABBA' na podstawie wygenerowanej tablicy działa tylko dla wartości i <= 36. Przy większych wartościach liczenie w ten sposób powoduje błąd w działaniu przeglądarki z powodu zbyt dużej ilości danych, które zostają wygenerowane. Z tego też powodu przy "i" o wartościach wyższych niż 35 funkcja ta nie zostaje wywołana. Obliczenie ilości wystąpień 'ABBA' jest kontynuowane poprze użycie funkcji na ciąg Fibonacciego */

let flag = 1;

let words = [x_0, x_1];

let searchWord = "ABBA";

let numberOfWords;

const wordCount = function (string, word) {
  return string.split(word).length - 1;
};

wrodsMultiply = function () {
  if (i >= 36) {
    return;
  }
  while (flag < i) {
    words.push(words[1] + words[0]);
    words.shift(0);
    flag++;
    lastWord = words[0];
    numberOfWords = wordCount(lastWord, searchWord);
  }
  console.log(
    'Wystąpienia słowa "ABBA" za pomocą funkcji dla i = ' +
      i +
      " dają wynik: " +
      numberOfWords
  );
};

wrodsMultiply();

/*Otrzymując wyniki z powyższego kodu można zaobserwować, że mamy tutaj do czynienia z ciągiem Fibonacciego */

function fibo(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

console.log(
  "Według ciągu Fibonacciego dla i = " + i + " dają wynik: " + fibo(i)
);
