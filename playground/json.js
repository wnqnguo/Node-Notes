const fs = require('fs');
var originalNote = {
	title: 'Sometitle',
    body: 'some body'
}
//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);
var noteString = fs.readFileSync('notes.json');
//convert the string back to object
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);