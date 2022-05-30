/* https://www.codewars.com/kata/515e271a311df0350d00000f/javascript
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers){
return numbers.map(item => Math.pow(item, 2)).reduce((a, b) => a + b, 0)
}

// или сразу во время редукции возводить значение в квадрат а потом прибавлять к аккумулятору:
 return numbers.reduce((s,v) => s + v * v, 0);
