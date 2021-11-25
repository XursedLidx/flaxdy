const { type, merge } = require('flaxdy') /* Import my lib to your project */

/* - Type function - */
const name = prompt('Enter your name:')

if (!type(name, 'string')) {
  sendMessage('You enter invalid data type value!')
} else {
  addUser(name, ...moreInfo)
}

/* - Merge function - */
let anyData = {
  a: 1,
  b: 2
}

let anyData2 = {
  c: 3,
  d: 4
}

merge(anyData, anyData2)

console.log(anyData) // => { a: 1, b: 2, c: 3, d: 4 }
