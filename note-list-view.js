(function(exports){
  function NoteListView(notelist){
    this.notelist = notelist;
    this.list = notelist.list;
  };


  NoteListView.prototype.listingNotes = function(){
    var arrayOfText = this.list.map(note => note.text).join('</div></li><li><div>');

    var htmlMessage = '<ul><li><div>'+ arrayOfText +'</div></li></ul>'
    return htmlMessage;
  };
  exports.NoteListView = NoteListView;
})(this);
