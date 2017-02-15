(function(exports) {
  var TEXT = "";

  NoteModel = function(text) {
    TEXT = text;
  };

  NoteModel.prototype.getText = function() {
    return TEXT;
  };

  exports.NoteModel = NoteModel;

})(this);
