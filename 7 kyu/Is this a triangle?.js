/*https://www.codewars.com/kata/56606694ec01347ce800001b

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

у треугольника сумма 2 любых сторон должна быть больше, чем 3-я сторона
*/

function isTriangle(a,b,c){
    if (a + b > c && a + c > b  && c + b > a ) {
      return true 
    } else return false;
   }
   
   isTriangle(1,2,2)
