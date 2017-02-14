(function(exports) {

  var NoteListModel = function() {
    this.NOTELIST = [];

  };

  NoteListModel.prototype.setNote = function(text) {
    this.NOTELIST.push(new NoteModel(text));
  };

  NoteListModel.prototype.getNotes = function() {
    return this.NOTELIST;

  };

  exports.NoteListModel = NoteListModel;
})(this);
