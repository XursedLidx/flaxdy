const _ = require('flaxdy') /* Import my lib to your project */

/* - Sets function - */
const date = new Date()

let userInfo = { /* some data */
  name: 'Jhon',
  age: 29,
  birthDate: '5.5'
}

if ((date.getDate() + (date.getMonth() + 1)).toString() === userInfo.birthDate) {
  userInfo.sets('age', 30) /* update field */
}

/* - Add function - */
let userInfo2 = {
  name: 'Lary',
  age: 15,
  school: '№16'
}

userInfo2.add('job', 'souvenir seller') /* now userInfo2 has that field */

/* - Deletes function - */
const user = {
  status: 'online',
  role: 'moderator',
  unknown: 'undefined'
}

user.deletes('unknown')

/* - Cache function - */
let oldUserAccount = {
  name: 'Kent',
  age: 42,
  job: 'full stack'
}

const oldAccountCached = oldUserAccount.cache() /* now its not available for changes */

/* - Splits function - */
const objectToSplit = {
  a: 1,
  b: 2,
  c: 3
}

objectToSplit.splits()[0] // keys
objectToSplit.splits()[1] // values
objectToSplit.splits() // keys and values

/* - Clear function - */
let userInfo3 = {
  name: 'Alex',
  age: 56,
  unnecessaryInformation: true,
  isProgrammer: true,
  city: 'New York'
}

userInfo3.clear('boolean')

console.log(userInfo3) // => { name: 'Alex', age: 56, city: 'New York' }

/* - Concat function - */
let userInfo4 = {
  name: 'Marty',
  age: 34,
  status: 'online'
}

userInfo4.concat('job', {
  name: 'programmer',
  salary: '1000$'
})
