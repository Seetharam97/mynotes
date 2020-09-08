const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema =  new Schema ({
	username: { type: String, required: true },
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	mobile_number: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	confirm_password: { type: String, required: false },
	hash: { type: String, required: true },
	image: {type: String, required: false},
	createdAt: { type: Date, default: Date.now},
	updatedAt: { type: Date, default: Date.now}
})

usersSchema.set('toJSON', { virtual: true })
module.exports = mongoose.model('users', usersSchema)