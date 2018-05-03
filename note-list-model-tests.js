function testNoteListStorage() {
  var noteList = new NoteList();
  assert.isTrue(noteList.list.length === 0, "notelist storage instantiates a new notelist");
};

function testcreateAndAddNote() {
  var noteList = new NoteList();
  noteList.createAndAddNote("Favourite drink: seltzer");
  assert.isTrue(noteList.list.length === 1, "notelist storage creates and adds a note to a notelist");
};

function testAddNote() {
  var noteList = new NoteList();
  var note = new Note("testing");
  noteList.addNote(note);
  assert.isTrue(noteList.list.length === 1, "notelist storage adds a note to a notelist");
};

function testNotesAreEqual() {
  var noteList = new NoteList();
  var note1 = new Note("test");
  var note2 = new Note("test");
  noteList.addNote(note1);
  noteList.addNote(note2);
  assert.isTrue(noteList.notesAreEqual(noteList.viewNotes(), [note1, note2]), "notelist storage checks notes inserted are equal");
};

testNoteListStorage();
testcreateAndAddNote();
testNotesAreEqual();
testAddNote();
