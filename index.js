Object.prototype.sets = require('./core/Objects').sets
Object.prototype.add = require('./core/Objects').add
Object.prototype.deletes = require('./core/Objects').deletes
Object.prototype.cache = require('./core/Objects').cache
Object.prototype.splits = require('./core/Objects').splits
Object.prototype.clear = require('./core/Objects').clear
Object.prototype.concat = require('./core/Objects').concat
Object.prototype.pluralDel = require('./core/Objects').pluralDel

Array.prototype.has = require('./core/Arrays').has
Array.prototype.sPush = require('./core/Arrays').sPush
Array.prototype.indexesOf = require('./core/Arrays').indexesOf

String.prototype.has = require('./core/Strings').has

exports.type = require('./lib/core.index').type
exports.merge = require('./lib/core.index').merge
exports.assertString = require('./lib/core.index').assertString
exports.Validator = require('./lib/core.index').Validator