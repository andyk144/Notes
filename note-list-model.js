(function(exports){
  function NoteList(){
    this.list = [];
  };
  NoteList.prototype.addNote = function(note){
    this.list.push(note);
  }

  NoteList.prototype.createAndAddNote = function(noteText){
    var newNote = new Note(noteText);
    this.list.push(newNote);
  }

  NoteList.prototype.viewNotes = function(){
    return this.list;
  }

  NoteList.prototype.notesAreEqual = function(arrayA, arrayB) {
   if (arrayA.length != arrayB.length) {
     return false;
   }
   return arrayA.every(function(element, index) {
     return element === arrayB[index];
   });
 };

  exports.NoteList = NoteList;
})(this);
