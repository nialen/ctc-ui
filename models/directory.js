var mongoose = require('mongoose')
var DirectorySchema = require('../schemas/directory')
var Directory = mongoose.model('Directory', DirectorySchema)

module.exports = Directory
