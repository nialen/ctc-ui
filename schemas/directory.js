var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var DirectorySchema = new Schema({
  name: String,
  categories: [{
    type: ObjectId,
    ref: 'Category'
  }],
  createAt: {
    type: Date,
    default: Date.now()
  },
  updataAt: {
    type: Date,
    default: Date.now()
  }
})

DirectorySchema.pre('save', function(next) {
  if (this.isNew) {
    this.createAt = this.updataAt = Date.now()
  } else {
    this.updataAt = Date.now()
  }

  next()
})

DirectorySchema.statics = {
  fetch: function(cb) {
    return this.find({}).sort('createAt').exec(cb)
  },
  findById: function(id, cb) {
    return this.findOne({_id: id}).exec(cb)
  }
}

module.exports = DirectorySchema
