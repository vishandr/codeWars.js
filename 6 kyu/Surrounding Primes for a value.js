/* Surrounding Primes for a value
 https://www.codewars.com/kata/560b8d7106ede725dd0000e2

We need a function prime_bef_aft() that gives the largest prime below a certain given value n,

befPrime or bef_prime (depending on the language),

and the smallest prime larger than this value,

aftPrime/aft_prime (depending on the language).

The result should be output in a list like the following:

primeBefAft == [befPrime, aftPrime]
If n is a prime number it will give two primes, n will not be included in the result.

Let's see some cases:

primeBefAft(100) == [97, 101]

primeBefAft(97) == [89, 101]

primeBefAft(101) == [97, 103]
Range for the random tests: 1000 <= n <= 200000

(The extreme and special case n = 2 will not be considered for the tests. Thanks Blind4Basics)
*/


function primeBefAft(num) {

    function isPrime(element) {
        if (element <=1) return false;
    for (let i = 2; i * i <= element; i++){
        if (element % i == 0) {return false}
        else continue;
    } return true
    }
  
let arr = [];

for (let k = num-1; true; k--){
    if (isPrime(k)) {
        arr.push(k);
        break;}
} ;

for (let k = num+1; true; k++){
    if (isPrime(k)) {
        arr.push(k);
        break;}
} 

return arr
}
console.log(primeBefAft(12))

// а вот и более элегантное решение этой задачи (без сложного цикла)

function primeBefAft(num) {
  const isPrime = (n) => {
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };
  
  let before = num - 1, after = num + 1;
  while (!isPrime(before)) --before;
  while (!isPrime(after)) ++after;
  return [before, after];
}

