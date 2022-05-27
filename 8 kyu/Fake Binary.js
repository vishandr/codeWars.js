/* Fake Binary
https://www.codewars.com/kata/57eae65a4321032ce000002d/javascript
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/

// через цикл (легче и понятнее новичку)
function fakeBin(x){
let str = '';
for (let i = 0; i < x.length; i++){
    if (+x[i] < 5){ 
        str += 0;
    } else str += 1;
}
    return str
}
// через методы массивов - красивее, быстрее и компактнее
return x.split('').map(item => item < 5 ? 0 : 1).join('')
