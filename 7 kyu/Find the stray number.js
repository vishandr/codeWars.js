/* Find the stray number
https://www.codewars.com/kata/57f609022f4d534f05000024/javascript
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {  

  if (numbers[0] === numbers[1]) {
    return (numbers.find((elem) => elem !== numbers[0]))
  } else if (numbers[0] === numbers[2]) {
    return numbers[1]
  } else return numbers[0];
}

// можно отсортировать и проверить, стоят ли 2 одинаковых вначале. если да - ответ последнее, и наоборот
  let a = numbers.sort();
  if(a[0] != a[1]) {
    return a[0]
  } 
  return a[a.length-1]
}

//либо же вообще находим элемент, для которого indexOf == lastIndexOf 
return numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));
