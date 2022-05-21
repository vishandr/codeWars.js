/* Century From Year
https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/javascript

Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

function century(year) {
    let yearStr = year.toString();
    if (yearStr.endsWith('00')){
        return (+yearStr.slice(0, -2))
    } else return (+yearStr.slice(0, -2) + 1)
}

// using ceiling method to round up to nearest century (100)
  return Math.ceil(year/100); 
