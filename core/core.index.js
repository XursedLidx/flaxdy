/**
 * TypeChecking
 * @param {any} value 
 * @param {string} type 
 * @returns {Boolean}
 */
const type = (value, type) => {
  if (!type || typeof type !== 'string') {
    throw new Error(`Type is not define or has invalid type!`)
  }

  if (!value) {
    throw new ReferenceError(`Value not found!`)
  }

  if (type.toLowerCase() !== 'array') {
    if (typeof value === type) {
      return true
    }
    return false
  } else {
    if (Array.isArray(value)) {
      return true
    }
    return false
  }
}

exports.type = type