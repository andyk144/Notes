(function(exports){
  function NoteListView(notelist){
    this.list = notelist.list;
  };


  NoteListView.prototype.listingNotes = function(){
    if (this.list.length > 0){
        var arrayOfText = this.list.map(note => note.text.slice(0,20)).join('</div></li><li><div>');
        var htmlMessage = '<ul><li><div>'+ arrayOfText +'</div></li></ul>'
        return htmlMessage;
    } else {
        return "No notes to list";
    }
  };
  exports.NoteListView = NoteListView;
})(this);
