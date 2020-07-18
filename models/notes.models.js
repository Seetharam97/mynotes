const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dailyNoteSchema = new Schema({

	title: { type: String, require: false },

	content: { type: String, require: false}
})

dailyNoteSchema.set('toJSON', { virtual: true })

module.exports = mongoose.model('dailyNotes', dailyNoteSchema)