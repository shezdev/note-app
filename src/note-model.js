(function() {

  NoteModel = function(text) {
    this.text = text;
  };

  NoteModel.prototype.getText = function() {
    return this.text;
  }

})();
// (function() {
//   var TEXT = '';
//   function NoteModel(note){
//     TEXT = note;
//     return TEXT;
//   };
//
// })();
