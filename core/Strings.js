/**
 * @param {string} subString 
 * @returns {Boolean}
 */
function has (subString) {
  if (!subString || typeof subString !== 'string') {
    throw new Error(`subString not found or has invalid type (not string)!`)
  }

  const hasSubString = this.includes(subString)

  return hasSubString
}

/* - Exports - */

exports.has = has