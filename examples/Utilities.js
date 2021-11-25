const _ = require('flaxdy') /* Import my lib to your project */

/* - Type function - */
const name = prompt('Enter your name:')

if (!type(name, 'string')) {
  sendMessage('You enter invalid data type value!')
} else {
  addUser(name, ...moreInfo)
}