/* Abbreviate a Two Word Name
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/javascript
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
// console.log(name.split(' '))
let abbrev = name[0].toUpperCase();
for(let i = 0; i < name.length; i++){
    if (name[i] == " "){
        abbrev += "." + name[i+1].toUpperCase()
    }
}
console.log(abbrev)
}

abbrevName("Sam Harris")

// one more way with arrays:

return name.split(' ').map(item => (item.slice(0, item.length-(item.length-1))).toUpperCase()).join(".")

// можно было не усложнять, а использовать substr:
return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');

// или вообще указать первый симовол:
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')


