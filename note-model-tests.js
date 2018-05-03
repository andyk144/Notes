function testCreateNote() {
  var note = new Note("This is a test");
  assert.isTrue(note.text === "This is a test", "note model creates a note");
};

testCreateNote();

function testReadNote() {
  var note = new Note("This is a test");
  assert.isTrue(note.read() === "This is a test", "note model read method displays a note");
};

testReadNote();
