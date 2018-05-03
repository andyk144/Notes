function testNoteControllerCreatesANote() {
  var noteController = new NoteController(notelist = new NoteList());
  assert.isTrue(noteController.noteList.list.length === 1, "note controller creates a notelist and adds a note");
};

function testInnerHtmlContainsCorrectText() {
  var noteController = new NoteController(notelist = new NoteList());
  noteController.addHtmlToPage();
  var htmlText = '<ul><li><div>Favourite drink = Seltzer</div></li></ul>'
  assert.isTrue(document.getElementById('app').innerHTML === htmlText, 'note controller adds html text to page')
}


testNoteControllerCreatesANote();
