/**
 * @param {string} key 
 * @param {any} value 
 */
function sets (key, value) {
  if (!this[key]) {
    throw new ReferenceError(`[${key}] not found!`)
  }

  this[key] = value

  return this
}

/**
 * @param {string} key 
 * @param {any} value 
 */
function add (key, value) {
  if (typeof key !== 'string') {
    throw new TypeError(`Key must have a string type!`)
  }

  if (!key || !value) {
    throw new ReferenceError(`Key [${key}] & value [${value}] - one of the parameters not found!`)
  }

  this[key] = value

  return this
}

/**
 * @param {string} key 
 * @param {any} value 
 */
function deletes (key) {
  if (typeof key !== 'string') {
    throw new TypeError(`Key must have a string type!`)
  }

  if (!this[key]) {
    throw new ReferenceError(`Key [${key}] not found!`)
  }

  delete this[key]

  return this
}

function cache () {
  let $cache = this

  const hours = new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours()
  const minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()

  $cache['cache-time'] = `${hours}:${minutes}`

  Object.freeze($cache)

  return $cache
}

function splits () {
  const $keys = Object.keys(this)
  const $values = Object.values(this)

  const result = [$keys, $values]

  return result
}

/**
 * Clear some data
 * @param {string} dataType 
 */
function clear (dataType) {
  if (!dataType || typeof dataType !== 'string') {
    throw new Error(`Data type invalid or not found!`)
  }

  try {
    for (let i in this) {
      if (typeof this[i] === dataType) {
        delete this[i]
      }
    }
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @param {string} name Name for field, that must be add
 * @param {object} object 
 */
function concat (name, object) {
  if (!object) {
    throw new ReferenceError(`Object not found!`)
  }

  if (typeof object === 'object' && Array.isArray(object)) {
    throw new TypeError(`Object has invalid type (not object)!`)
  }

  this[name] = {
    ...object
  }

  return this
}

/* - Exports - */

exports.sets = sets
exports.add = add
exports.deletes = deletes
exports.cache = cache
exports.splits = splits
exports.clear = clear
exports.concat = concat