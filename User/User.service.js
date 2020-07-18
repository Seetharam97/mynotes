// requirements

const config = require('../config.json');

const jwt = require('jsonwebtoken');

const db = require('../helper/db.js');

const moment = require('moment');

const multer = require('multer');

const mongoose = require('mongoose');

// Database
const Notes = db.dailyNotes;

const user = db.users;

NODE_TLS_REJECT_UNAUTHORIZED = 0;

module.exports = {

	// Notes details
	addNotes,

	getNotes,

	getNotesById,

	updateNotes,

	deleteNotes,
};

// functions
// 1.add the notes
async function addNotes(req, callback){

	console.log("add notes in service");

	const note = new Notes(req);

	note.save().then((data) => {

		callback(data);
	});


};

// 2.get the all notes
async function getNotes(req, callback){

	console.log("get notes in service");

	return await Notes.find().sort({'_id':-1}).exec(function(err, result){

		if (err) throw(err)

		callback(result)

	})
};

// 3.get the all notes by individual id
async function getNotesById(req, callback){

	console.log("get notes by Id in the service");

	return await Notes.find(req).sort({ '_id': -1 }).exec(function(err, result){

		if (err) throw (err)

		callback(result)

	})
};

// 4.update Note details based upon the individual id...individual
async function updateNotes(req, callback){

	console.log("Update the notes in Service");

	var condition = req._id;

	var update = req.updateObj;

	var options = { multi: true };

	Notes.findOneAndUpdate( condition, update, options ).exec().then((result) =>{

		console.log(result)

		callback(result)

	})

};

// 5.Delete the notes
async function deleteNotes(req, callback){

	console.log("deleteNotes in Service");

	await Notes.findByIdAndRemove(req)

		callback("success")

};

// 6.Create the user
async function Create(req, callback){

	console.log("User in resgister profile");


}