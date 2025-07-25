function reverseAlphabet(str) {
  // Pisahkan huruf dan angka
  const letters = str.match(/[A-Za-z]+/)[0];
  const number = str.match(/\d+/) ? str.match(/\d+/)[0] : '';
  
  // Reverse huruf dan gabungkan dengan angka
  const reversedLetters = letters.split('').reverse().join('');
  return reversedLetters + number;
}

// Test case
console.log(reverseAlphabet("NEGIE1")); // Output: "EIGEN1"