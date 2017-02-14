(function(exports) {

  var NoteModel = function(text) {
    this.TEXT = text;
  };

  NoteModel.prototype.getText = function() {
    return this.TEXT;
  };

  exports.NoteModel = NoteModel;

})(this);
