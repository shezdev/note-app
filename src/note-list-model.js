(function() {
  var NOTELIST = [];

  NoteListModel = function() {

  };

  NoteListModel.prototype.setNote = function(text) {
    note = new NoteModel(text);
    NOTELIST.push(note);
  };

  NoteListModel.prototype.getNotes = function() {
    return NOTELIST;
  };


})();
