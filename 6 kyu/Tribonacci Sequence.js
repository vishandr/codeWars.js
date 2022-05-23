/* Tribonacci Sequence
https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]
*/

function tribonacci(signature,n){
    if (n === 0){return []};
    
      let tribo = []
      if (n < 3) {
          for (let i = 0; i < n; i++){
          tribo.push(signature[i])
          }
      }else {
        
        let a = signature[0];
      let b = signature[1];
      let c = signature[2];
      tribo = [a, b, c,];
      for (let i = 3; i < n; i++){
          tribo.push(a+b+c);
          a = b; 
          b = c;
          c = tribo[i];
      }}
      return tribo;
  }

tribonacci([100,200,300],1)

// интересный способ решения с помощью редукции:

  while (signature.length < n) {
    signature.push(signature.slice(-3).reduce((a, b) => a + b));
  }
  return signature.slice(0, n);
}