/* https://www.codewars.com/kata/56747fd5cb988479af000028/javascript
DESCRIPTION:
You are going to be given a word. Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
*/

function getMiddle(string) {
  if (string.length % 2 === 0){
    return string[string.length/2-1] + string[string.length/2]
  }
  return string[Math.floor(string.length / 2)]
}

console.log(getMiddle("Ф"))
