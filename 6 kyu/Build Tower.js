/* Build Tower
https://www.codewars.com/kata/576757b1df89ecf5bd00073b/javascript
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(n) {
    let arr = [];
    let str = "*";
    for (let i = 1; i <= n; i++){
        arr.push(" ".repeat(n - i)+"*".repeat(i*2-1)+" ".repeat(n - i));
    };
     console.log(arr);
  return arr;
  }

towerBuilder(3)
