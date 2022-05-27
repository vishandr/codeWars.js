/* 
Reverse words
https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/javascript
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

  return str.split(' ').map(item => item.split('').reverse().join('')).join(' ')


// можно усложнить и перебрать строки массива с помощью цикла

function reverseWords(str) {
    // return str.split(' ').map(item => (item.split().reverse()))
    let arr = str.split(' ');
    for (let i =0; i < arr.length; i++){
        let str = "";
        for (let k = arr[i].length-1; k >= 0; k--){
            str += arr[i][k]
        }
        arr[i] = str
    }
return arr.join(' ')
}
