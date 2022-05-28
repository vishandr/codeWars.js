/* KISS - Keep It Simple Stupid
https://www.codewars.com/kata/57eeb8cc5f79f6465a0015c1
KISS stands for Keep It Simple Stupid. It is a design principle for keeping things simple rather than complex.

You are the boss of Joe.

Joe is submitting words to you to publish to a blog. He likes to complicate things.

Define a function that determines if Joe's work is simple or complex.

Input will be non emtpy strings with no punctuation.

It is simple if: the length of each word does not exceed the amount of words in the string (See example test cases)

Otherwise it is complex.

If complex:

return "Keep It Simple Stupid"
or if it was kept simple:

return "Good work Joe!"
*/

    let numberOfWords = words.split(' ').length;    
    let reply = words.split(' ').filter(elem => elem.split('').length > numberOfWords)
    return reply.length === 0 ? "Good work Joe!" : "Keep It Simple Stupid"

// решение перебором 
function isKiss( words ){
      let numberOfWords = words.split(' ').length;
      let arrayOfWords = words.split(' ');
    for (i = 0; i < numberOfWords; i++){
        if (arrayOfWords[i].split('').length > numberOfWords){
            return "Keep It Simple Stupid";
          break;
        } 
    }return "Good work Joe!"
}
