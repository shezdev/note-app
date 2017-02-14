(function() {

  NoteListModel = function() {
    NOTELIST = [];

  };

  NoteListModel.prototype.setNote = function(text) {
    note = new NoteModel(text);
    NOTELIST.push(note);
  };

  NoteListModel.prototype.getNotes = function() {
    return NOTELIST;

  };

// exports.setNote = setNote;
// exports.getNotes = getNotes;
})();
