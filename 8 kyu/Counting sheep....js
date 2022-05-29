/* Counting sheep...
https://www.codewars.com/kata/54edbc7200b811e956000556/javascript
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

// решение через цикл:
function countSheeps(arrayOfSheep) {
let count = 0;
for (let i = 0; i< arrayOfSheep.length; i++){
  if (arrayOfSheep[i] === true) count++
}
return count;
}

// хотя решение через фильтр смотрится гораздо лаконичнее:
return arrayOfSheep.filter(Boolean).length
