console.log('starting app.');

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;
const command = argv._[0];

if(command === 'add'){
  var note = notes.addNotes(argv.title, argv.body);
  if(note){
  	console.log('notes created');
    notes.logNote(note);
  }else{
  	console.log('notes title taken');
  }
}else if (command=== 'list'){
  var allNotes =notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note)=>notes.logNote(note));
  
}else if (command === 'remove'){
  var removed = notes.remove(argv.title);
  var message = removed ? 'note was removed' : 'note not found'
  console.log(message);
}else if (command ==='read'){
  var note = notes.getNote(argv.title);
  if(note){
    console.log("note found");
    notes.logNote(note);
  }else{
    console.log("note not found");
  }
}else{
	console.log('command not recognized');
}
