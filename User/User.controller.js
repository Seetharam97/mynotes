const express = require('express');

const router = express.Router();

const userService = require('./User.service.js');

// Notes add details
router.post('/addNotes', addNotes);

router.post('/updateNotes', updateNotes);

router.post('/deleteNotes', deleteNotes);

router.get('/getNotes', getNotes);

router.get('/getNotesById', getNotesById);


module.exports = router;


// functions

// 1. addNotes
function addNotes(req, res, next){

	console.log("addNotes in the Controller");

	userService.addNotes(req.body, function(result){

		console.log("result"+result)

		res.json({ "message":"Success", "status": "Notes has been added Successfully" })

	})
}

// 2.getNotes
// function getNotes(res, req, next){

// 	console.log("get the notes in Controller");

// 	userService.getNotes(req.body, function(result){

// 		console.log("result"+result)

// 		res.json({ "message": "Notes details", "status": "available notes", "records": result })

// 	})
// }
function getNotes(req, res, next) {

    console.log("get the notes in Controller");

    userService.getNotes(req.body, function(result){

      console.log("result"+result)

      res.json({"status":"Notes details","records":result})

    })

}
// 3.getNotesById
// function getNotesById(res, req, next){

// 	console.log("get the notes by individual id in Controller");

// 	userService.getNotesById(req.body, function(result){

// 		console.log("result"+result);

// 		res.json({ "status": "Notes details by individual id", "records": result })

// 	})
// }

// 3. getNotesById
function getNotesById(req, res, next) {

    console.log("get the notes by individual id in Controller");

    userService.getNotesById(req.body, function(result){

      console.log("result"+result)

      res.json({"status":"Notes details by individual id","records":result})

    })

}

// 4.updateNotes
function updateNotes(req, res, next){

	console.log("update notes in the Controller");

	userService.updateNotes(req.body, function(result){

		console.log("result"+result);

		res.json({ "message": "Success", "status": "Notes has been updated", "records": result })

	})
}

// 5.deleteNotes
function deleteNotes(req, res, next){

	console.log("delete notes in Controller");

	userService.deleteNotes(req.body, function(result){

		console.log("result"+result)

		res.json({ "message": "Success", "status": "Notes has been deleted"})

	})
}