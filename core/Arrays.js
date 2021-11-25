/**
 * Check item exist in array
 * @param {any} item 
 * @returns {Boolean}
 */
function has (item) {
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
function sPush (values) {
  if (!values || !Array.isArray(values)) {
    throw new Error(`Values not found or has invalid data type (not array).`);
  }

  for (let value of values) {
    this.push(value)
  }

  return this
}

/**
 * @param {array} items 
 */
function indexesOf (items) {
  if (!items || !Array.isArray(items)) {
    throw new Error(`Items not found or has invalid type (not array)!`)
  }

  let result = []

  for (let value of this) {
    for (let item of items) {
      if (value === item) {
        result.push(this.indexOf(value))
        delete this[this.indexOf(value)]
      }
    }
  }

  return result
}

/* - Exports - */

exports.sPush = sPush
exports.has = has
exports.indexesOf = indexesOf