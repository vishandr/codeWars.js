/* https://www.codewars.com/kata/5668e3800636a6cd6a000018
Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:

ghostBusters("Sky scra per");
Should return:

"Skyscraper"
If the building contains no ghosts, return the string:

"You just wanted my autograph didn't you?" */


function ghostBusters(building) {
return building.match(/\s/) ? building.replace(/\s/g, '') : "You just wanted my autograph didn't you?"
}
// if i wouldn'n know regular expressions:

function ghostBusters(building) {
  const str = "You just wanted my autograph didn't you?"
  const noSpace = building.split(' ').join('')
  return noSpace === building ? str : noSpace
}
