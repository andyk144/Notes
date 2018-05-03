function testSingleNoteView() {
  var note = new Note("Favourite drink: Seltzer");
  var singleNoteView = new SingleNoteView(note)
  assert.isTrue(singleNoteView.note.text === "Favourite drink: Seltzer", "Single note view takes a note");
};

function testSingleNoteViewCreateHtmlText(){
  var note = new Note("Favourite drink: Seltzer");
  var singleNoteView = new SingleNoteView(note)
  assert.isTrue(singleNoteView.createHtmlString() === '<div>Favourite drink: Seltzer</div>', 'Test that html string is created');
};

testSingleNoteView();
testSingleNoteViewCreateHtmlText();
