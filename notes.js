const fs = require('fs');
var fetchNotes = () => {
	try{
		var notesString = fs.readFileSync('notes-data.json')
		return JSON.parse(notesString);
	}catch(e){
		return [];
	}
}
var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
var addNotes = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	};
	try{
		var notesString = fs.readFileSync('notes-data.json')
		notes = JSON.parse(notesString);
	}catch(e){

	}
	var duplicateNotes = notes.filter((note) => note.title === title);
	if(duplicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	};
	}
	
var getAll = () => {
	console.log("getting all notes");
}
var getNote = (title) => {
	console.log("getting note ", title);
}
var remove = (title) => {
 //fetchnotes
 var notes = fetchNotes();
 //filter notes
 var removedNote= notes.filter((note) => note.title !== title);
 saveNotes(removedNote);
 return notes.length !== removedNote;
}
module.exports = {
	addNotes,
	getAll,
	getNote,
	remove
}