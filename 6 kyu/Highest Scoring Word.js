/* Highest Scoring Word (6 kyu)
https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript
DESCRIPTION:
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/

function high(x){
  let words = x.split(' ');
  let aplphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let array = words.map(item => item.split('').map(letter => aplphabet.findIndex(item => item === letter)+1).reduce((sum, current) => sum + current));
  let max = array.reduce((a, b) => a < b ? b : a);
  let position = array.findIndex(item => item === max);
  return words[position]
}

