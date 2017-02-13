(function() {

  NoteModel = function(text) {
    this.text = text;
  };

  NoteModel.prototype.getText = function() {
    return this.text;
  }

})();
