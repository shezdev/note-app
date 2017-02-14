(function() {
 var NOTELIST = [];

  View = function(noteList) {
    NOTELIST = noteList;
  };

  View.prototype.getHTML = function() {
    text = "<ul>";
    for(i=0; i<NOTELIST.getNotes().length; i++){
      text+= "<li><div>"+ NOTELIST.getNotes()[i].getText() +"</div></li>";
    }
    text+="</ul>";
    return text;
  };


})();
