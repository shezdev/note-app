(function() {
 var NOTELIST = [];

  NoteListView = function(noteListmodel) {
    NOTELIST = noteListmodel;
  };

  NoteListView.prototype.getHTML = function() {
    text = "<ul>";
    for(i=0; i<NOTELIST.getNotes().length; i++){
      text+= "<li><div>"+ NOTELIST.getNotes()[i].getText() +"</div></li>";
    }
    text+="</ul>";
    return text;
  };


})();
