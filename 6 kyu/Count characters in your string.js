/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count (string) {  
  const final = {};
  for (let i = 0; i < string.length; i++){
  
    if (string[i] in final) { 
      final[string[i]] += 1;
    } else final[string[i]] = 1;
  }
  
   return final;
}

// либо заменить цикл методами перебора массивов:
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
