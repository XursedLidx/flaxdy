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

/* - SuperPush function - */
let simpleArray = [1, 2, 3, 4]

simpleArray.superPush([5, 6, 7, 8])

console.log(simpleArray) // => [1, 2, 3, 4, 5, 6, 7, 8]