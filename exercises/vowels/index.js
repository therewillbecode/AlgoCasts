// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vs = ['a','e','i','o','u']

const vowels = str =>
      str.split('')
      .reduce((count, char) =>
              vs.includes(char.toLowerCase())
              ? count + 1
              : count
              ,0)

module.exports = vowels;
