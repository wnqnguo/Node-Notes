console.log('starting app.');

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;
const command = argv._[0];
console.log("Command: ", command);

if(command === 'add'){
  var note = notes.addNotes(argv.title, argv.body);
  if(note){
  	console.log('notes created'+ `title :${note.title}`);
  }else{
  	console.log('notes title taken');
  }
}else if (command=== 'list'){
  notes.getAll();
}else if (command === 'remove'){
  var removed = notes.remove(argv.title);
  var message = removed ? 'note was removed' : 'note not found'
  console.log(message);
}else if (command ==='read'){
  notes.getNote(argv.title);
}else{
	console.log('command not recognized');
}
