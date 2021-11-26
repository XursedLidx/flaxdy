# Flaxdy | JavaScript

## Code Example.

```js
const _ = require('flaxdy')
const date = new Date()
const nowDate = (date.getDate() + (date.getMonth() + 1)).toString()

let userInfo = {
  name: 'Jhon',
  age: 29,
  birthDate: '5.5'
}

if (nowDate === userInfo.birthDate) {
  userInfo.sets('age', 30)
}
```

## Discription.

<p>A simple, gradually developing library for interacting with different types of data. For example - Objects, Arrays and Srings. And library have own utilities!</p>

## Install.

### NPM

```
npm i flaxdy
```

## ChangeLog.

### ~ 0.1.0

* Added the add function
* Added LICENSE file

### ~ 0.2.0

* fixed some mistakes with README.
* some code has been optimized. Now it's a little faster and smaller.
* Added two new functions:
  * Added delete function.
  * Added cache function.
    * If you want, you can save some data in the object, and after saving you won't be able to change it, I think it might be useful.

### ~ 0.3.0

* Added two new functions:
  * Added splits function.  
  * Added clear function.
* Added url to library`s github repository.
  * <p>Now you can see some examples on github page!</p>

### ~ 1.0.0

* Added two function for arrays:
  * Added has function.
  * Added superPush function.
* Files splits by function ownership.
  * Objects and Arrays
* Added utilities:
  * Added type function
* Examples on github splits by function ownership.

### ~ 2.0.0

* Fixed some mistakes with README:
  * Some grammer mistakes.
  * New README-style.
* Added new function for objects:
  * Added concat function, which will attach new object in your object.
* Added new function for arrays:
  * Added indexesOf, which will returns to you array of indexes of founded elements
  * Fix superPush to sPush.
* Added new utility:
  * Added merge function.
* Code splits on directories.

### ~ 3.0.0

* Fixed some bugs in code.
* Added new data type: String and one function for this:
  * Added has function.
* Added new function to Objects:
  * Added pluralDel function.
* Added new utilties:
  * Added assertString function.
  * Added simple validator (isEmail, isFQDN, isIP).