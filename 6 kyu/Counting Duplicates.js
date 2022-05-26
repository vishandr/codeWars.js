/* Counting Duplicates

https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// function countDuplicates(str){
//   let arr = str.toLowerCase().split('');
//   let duplicates = [];
//   console.log(arr)
//     // console.log(duplicates)
  
//   for (let i = 0; i < str.length; i++){
//       let checkingElement = String(arr.slice(-1));
//       console.log(`checkingElement = ${checkingElement}`)
//       console.log(typeof(checkingElement));
//       arr.pop();
//       console.log(`проверяем сожержит ли ${arr} число ${checkingElement}`)
//     if (arr.includes(String(checkingElement))){
//           console.log(`Ура! добавляем ${checkingElement} в массив duplicates`);
//         duplicates.push(checkingElement); 
//         // checkingElement = arr.slice(-1);
//     }else (console.log("переходим к следующему єлементу"))
//   }
//   console.log(`Array duplicates = ${duplicates}`);
// }

function duplicateCount(str){
    let arr = str.toLowerCase().split('');
    let duplicates = [];
        
    for (let i = 0; i < str.length; i++){
        let checkingElement = String(arr.slice(-1));
        arr.pop();
      if (arr.includes(checkingElement)){
        if (!duplicates.includes(checkingElement))
          duplicates.push(checkingElement); 
      }
    }
    return duplicates.length
}

// вариант с перебором массива через  forEach

    let duplicates = [];
    str.toLowerCase().split('').forEach(function(v, i, arr){
        if (arr.lastIndexOf(v) != i && duplicates.indexOf(v) === -1){
            duplicates.push(v)
        }
    });      
    return duplicates.length
}
