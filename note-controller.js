(function(exports){
  function NoteController(notelist = new NoteList()){
    this.noteList = notelist;
    notelist.createAndAddNote("Favourite drink: seltzer");
    this.listView = new NoteListView(notelist);
};

NoteController.prototype.addHtmlToPage = function(){
  var noteText = this.listView.listingNotes();
  (document.getElementById('app')).innerHTML = noteText;
};

  exports.NoteController = NoteController;
})(this);
