const _ = require('flaxdy') /* Import my lib to your project */

/* - Has function - */
const userInfo = {
  name: 'Alex',
  age: 34,
  jobs: ['Junior', 'Middle', 'Senior']
}

if (userInfo.jobs.has('Middle')) {
  send(userInfo.name, 'to', 'DATA_BASE_MIDDLES')
}

/* - SPush function - */
let simpleArray = [1, 2, 3, 4]

simpleArray.sPush([5, 6, 7, 8])

console.log(simpleArray) // => [1, 2, 3, 4, 5, 6, 7, 8]

/* - IndexesOf - */
let numbersArray = [1, 2, 3, 4, 4, 5, 5]

console.log(numbersArray.indexesOf([4, 5])) // => [3, 4, 5, 6]
