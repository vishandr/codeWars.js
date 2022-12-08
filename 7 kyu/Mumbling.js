/* https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript
DESCRIPTION:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

function accum(string){
  let result = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++){
    let position = ''
    for (let j = 1; j <= i; j++){
      position += string[i].toLowerCase()
    };
      result = result + '-' + string[i].toUpperCase() + position
    }
  
  return result;
}

// the most popular on CodeWars:
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
