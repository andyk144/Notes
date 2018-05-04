(function(exports){
  function NoteBuilder(){
    var id = 0
    NoteBuilder.create = function(id, text){

    };
  };
  function Note(text){
    this.text = text;
  };
  Note.prototype.read = function(){
    return this.text;
  };
  exports.Note = new NoteBuilder();
})(this);
