# Flaxdy | JavaScript

## [Example].

```js
const _ = require('flaxdy') /* my library :) */
const date = new Date()

let userInfo = { /* some data */
  name: 'Jhon',
  age: 29,
  birthDate: '5.5'
}

if ((date.getDate() + (date.getMonth() + 1)).toString() === userInfo.birthDate) {
  userInfo.sets('age', 30) /* update field */
}
```

## [Discription].

<p>A simple, gradually developing library for interacting with different types of data</p>

## [Install].

### NPM

```
npm i flaxdy
```

## [ChangeLog].

### ~ 0.1.0

* added the add function))
* added LICENSE file

### ~ 0.2.0

* fixed some mistakes with README.
* some code has been optimized. Now it's a little faster and smaller.
* added delete function
* added cache function.
* <p>If you want, you can save some data in the object, and after saving you won't be able to change it, I think it might be useful))</p>

### ~ 0.3.0

* added splits function.
* added clear function.
* added url to library`s github repository.
* <p>Now you can see some examples on github page in directory 'examples'!</p>
