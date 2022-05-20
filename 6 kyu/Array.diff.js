/* Array.diff
https://www.codewars.com/kata/523f5d21c841566fde000009
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.
*/
function arrayDiff(a, b) {
  let finalArray = [];
    for (let i = 0; i < a.length; i++){
        if (!b.includes(a[i])){finalArray.push(a[i])}
    }
    return finalArray
}

// также крутое решение:
  return a.filter(e => !b.includes(e));

// либо с помощью indexOf

  return a.filter(x => b.indexOf(x) == -1);
