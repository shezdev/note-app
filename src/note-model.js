(function() {
  var TEXT = "";

  NoteModel = function(text) {
    TEXT = text;
  };

  NoteModel.prototype.getText = function() {
    return TEXT;
  }

})();
