var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var CategorySchema = new Schema({
  name: String,
  directory: {
    type: ObjectId,
    ref: 'Directory'
  },
  movies: [{
    type: ObjectId,
    ref: 'Movie'
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

CategorySchema.pre('save', function(next) {
	if (this.isNew) {
		this.createAt = this.updataAt = Date.now()
	} else {
		this.updataAt = Date.now()
	}

	next()
})

CategorySchema.statics = {
	fetch: function(cb) {
		return this.find({}).sort('updataAt').exec(cb)
	},
	findById: function(id, cb) {
		return this.findOne({_id: id}).exec(cb)
	}
}

module.exports = CategorySchema
