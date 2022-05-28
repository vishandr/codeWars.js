/* https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

*/

function getDivisorsCnt(n){
    let counter = 1;
    for (let i = 1; i * 2 <= n; i++){
        if (n % i == 0) {
            counter++;
    } 
        else continue;
    } return counter
      }
