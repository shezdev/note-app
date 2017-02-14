(function() {
 var NOTELIST = [];

  View = function(noteList) {
    NOTELIST = noteList;
  };

  View.prototype.getHTML = function() {
    return NOTELIST;
  };


})();
