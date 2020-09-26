// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = str =>
  str.split('').reverse().join('') == str

// Alternate solution
// less efficient as it has redundant checks after the half way mark
const palindromeAlt = str =>
      str.split('').every((s, i) => s === str[(str.length - 1) -i])

module.exports = palindrome;
