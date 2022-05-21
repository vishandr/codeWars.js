/* Sum of the first nth term of Series
https://www.codewars.com/kata/555eded1ad94b00403000071/javascript
Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

function SeriesSum(n){
    let arr = [];
for (let i = 0; i < n; i++){
    arr.push(1/(1+3*i))
};
return arr.reduce((sum, elem) => sum + elem, 0).toFixed(2)
}

SeriesSum(5)
