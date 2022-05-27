/* Remove String Spaces
https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
Simple, remove the spaces from the string, then return the resultant string.
*/


function noSpace(x){
return x.split('').filter(item => item != ' ').join('')
}

//либо разделить по пробелу:
return x.split(' ').join('')
