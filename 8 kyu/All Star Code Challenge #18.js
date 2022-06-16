/* All Star Code Challenge #18
https://www.codewars.com/kata/5865918c6b569962950002a1/javascript
This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1
*/

function strCount(str, letter){  
  let counter = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] === letter) counter++;
  }
  return counter
}

// отличное решение - отфильтровать все в массив
return str.split('').filter(c => c == letter).length;
