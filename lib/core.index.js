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

/**
 * @param {object} sources
 * @param {boolean} [redefine=true]
 * @returns {object}
 */
function merge (object, sources, redefine) {
  const hasOwnProperty = Object.prototype.hasOwnProperty

  if (!object) {
    throw new TypeError('Object is missed!')
  }

  if (!sources) {
    throw new TypeError('Sources is missed!')
  }

  if (redefine === undefined) {
    redefine = true
  }

  Object.getOwnPropertyNames(sources).forEach(function forEachOwnPropertyName (name) {
    if (!redefine && hasOwnProperty.call(object, name)) {
      return
    }

    const descriptor = Object.getOwnPropertyDescriptor(sources, name)

    Object.defineProperty(object, name, descriptor)
  })

  return object
}

exports.type = type
exports.merge = merge