/* ------------------------------------------- */
/*                O B J E C T S                */
/* ------------------------------------------- */

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

/**
 * Split function
 */
Object.prototype.splits = function() {
  const $keys = Object.keys(this)
  const $values = Object.values(this)

  const result = [$keys, $values]

  return result
}

/**
 * Clear some data
 * @param {string} dataType 
 */
Object.prototype.clear = function(dataType) {
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

/* ------------------------------------------- */
/*                A R R A Y S                  */
/* ------------------------------------------- */

/**
 * Check item exist in array
 * @param {any} item 
 * @returns {Boolean}
 */
Array.prototype.has = function(item) {
  if (!item) {
    throw new ReferenceError(`Item not found!`)
  }

  for (let value of this) {
    if (value === item) {
      return true
    }
  }

  return false
}

/**
 * Push much more element to array
 * @param {Array} values
 * @returns {Array}
 */
Array.prototype.superPush = function(values) {
  if (!values || !Array.isArray(values)) {
    throw new Error(`Values not found or has invalid data type (not array).`);
  }

  for (let value of values) {
    this.push(value)
  }

  return this
}

/* ------------------------------------------- */
/*              E X P O R T S                  */
/* ------------------------------------------- */

exports.type = require('./core/core.index.js').type