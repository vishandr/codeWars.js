/* Break camelCase
https://www.codewars.com/kata/5208f99aee097e6552000148/javascript
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
function breakCamelCase (string) {  
  let upperCase = string.toUpperCase();
  let finalString = "";
  for (let i = 0; i < string.length; i++){
    if (string[i] !== upperCase[i]){
      finalString += string[i];
    }else finalString += " "+upperCase[i];
  };
return finalString;
}

//разобраться с регулярными выражениями. такие задачи решаются в одну строку:
return(string.replace(/([A-Z])/g, ' $1'));
//или так:
return string.replace(/(?=[A-Z])/g," ")
//или так:
return text.split(/(?=[A-Z])/).join(' ');
