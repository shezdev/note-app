(function() {
 this.NOTELIST = [];

  NoteListView = function(noteListmodel) {
    this.NOTELIST = noteListmodel;
  };

  NoteListView.prototype.viewNotes = function() {
    var markup = "<ul>";
      for(i=0; i<this.NOTELIST.getNotes().length; i++){
        markup += "<li><div>"+ this.NOTELIST.getNotes()[i].getText() +"</div></li>";
      }
      markup += "</ul>";
    return markup;
  };


})();
