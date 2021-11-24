/**
 * Set value
 * @param {string} key 
 * @param {any} value 
 */
Object.prototype.sets = function(key, value) {
  if (!this[key]) {
    throw new ReferenceError(`[${key}] not found!`)
  }

  this[key] = value

  return this
}

/**
 * Add function
 * @param {string} key 
 * @param {any} value 
 */
Object.prototype.add = function(key, value) {
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
 * Delete function
 * @param {string} key 
 * @param {any} value 
 */
Object.prototype.delete = function(key) {
  if (typeof key !== 'string') {
    throw new TypeError(`Key must have a string type!`)
  }

  if (!this[key]) {
    throw new ReferenceError(`Key [${key}] not found!`)
  }

  delete this[key]

  return this
}

/**
 * Cache function
 */
Object.prototype.cache = function() {
  let $cache = this

  const hours = new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours()
  const minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()

  $cache['cache-time'] = `${hours}:${minutes}`

  Object.freeze($cache)

  return $cache
}