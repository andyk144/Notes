function testCreateNoteList() {
  var noteList = new NoteList();
  assert.isTrue(noteList === noteList);
};

function testNoteListStorage() {
  var noteList = new NoteList();
  assert.isTrue(noteList.list.length === 0);
};

function testcreateAndAddNote() {
  var noteList = new NoteList();
  noteList.createAndAddNote("Favourite drink: seltzer");
  assert.isTrue(noteList.list.length === 1);
};

function testAddNote() {
  var noteList = new NoteList();
  var note = new Note("testing");
  noteList.addNote(note);
  assert.isTrue(noteList.list.length === 1);
}

function testNotesAreEqual() {
  var noteList = new NoteList();
  var note1 = new Note("test");
  var note2 = new Note("test");
  noteList.addNote(note1);
  noteList.addNote(note2);
  assert.isTrue(noteList.notesAreEqual(noteList.viewNotes(), [note1, note2]));
};

testCreateNoteList();
testNoteListStorage();
testcreateAndAddNote();
testNotesAreEqual();
testAddNote();
