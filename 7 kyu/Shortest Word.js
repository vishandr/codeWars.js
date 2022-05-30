/* https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/javascript
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
   let array = s.split(' ');
 let shortest = array[0].length;
 for (let i = 0; i < array.length; i++){
   if (array[i].length < shortest){
     shortest = array[i].length;
   }
 }  
  return shortest
}

// вот красивое решение 
return Math.min(...s.split(" ").map (s => s.length));

// либо так - отсортировать, по возрастанию и первый в ряду и будет иметь минимальную длину
  return s.split(' ').sort((a,b) => a.length - b.length)[0].length;
