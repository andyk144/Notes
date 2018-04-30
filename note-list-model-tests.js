function testCreateNoteList() {
  var noteList = new NoteList();
  assert.isTrue(noteList === noteList);
};

function testNoteListStorage() {
  var noteList = new NoteList();
  assert.isTrue(noteList.list.length === 0);
};

testCreateNoteList();
testNoteListStorage();
