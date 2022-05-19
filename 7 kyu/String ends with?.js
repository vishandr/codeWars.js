/* https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending){
  if (ending.length === 0){return true};
  return (str.slice(-ending.length) === ending)
}

// оказівается есть вариант значительно проще и современне:
 return str.endsWith(ending);

// и еще один вариант
return str.substring(str.length - ending.length) === ending
