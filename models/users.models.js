const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema =  new Schema ({

	username: { type: String, require: true },

	first_name: { type: String, require: true },

	last_name: { type: String, require: true },

	mobile_number: { type: String, require: true, unique: true },

	email: { type: String, require: true, unique: true },

	password: { type: String, require: true },

	confirm_password: { type: String, require: false },

	hash: { type: String, require: true }

})

usersSchema.set('toJSON', { virtual: true })

// dailyNoteSchema.set('toJSON', { virtual: true })

module.exports = mongoose.model('users', usersSchema)