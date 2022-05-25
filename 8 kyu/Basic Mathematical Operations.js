/* Basic Mathematical Operations

https://www.codewars.com/kata/57356c55867b9b7a60000bd7/javascript
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

function basicMath(Operator, value1, value2) {
    if (Operator === "+"){
    return value1+value2
    } else if (Operator === "-"){
        return value1 - value2
    } else if (Operator === "*"){
        return value1 * value2
    } else if (Operator === "/"){
        return value1 / value2
    }
  }

// вот и задача, где может пригодиться switch

    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 'Operation must be one of + - * /';
    }
}

// b есть еще хитрый метод eval
return eval(a+o+b);
