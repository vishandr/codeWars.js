/* Sum of positive

https://www.codewars.com/kata/5715eaedb436cf5606000381/javascript
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    return arr.filter((elem => elem > 0)).reduce((a, b) => a+b, 0)
}

// интересный вариант с проверкой условия в reduce:
return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
