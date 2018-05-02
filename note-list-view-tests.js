function testListingNotes() {
  var notelist = new NoteList();
  notelist.createAndAddNote("Favourite food: pesto");
  notelist.createAndAddNote("Favourite drink: seltzer");
  var notelistview = new NoteListView(notelist);
  var textDisplayed = "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>"
  assert.isTrue(notelistview.listingNotes() === textDisplayed);
}

function testListingNotesWhenNoNotes() {
  var notelist = new NoteList();
  var notelistview = new NoteListView(notelist);
  var error = "No notes to list";
  assert.isTrue(notelistview.listingNotes() === error);
}

testListingNotes();
testListingNotesWhenNoNotes();
