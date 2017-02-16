"use strict";

(function(exports){

  function NoteController(list, element){
    this.list = list;
    this._view = new NoteListView(this.list);
    this.element = element;
  }


  NoteController.prototype.htmlInserter = function() {
    document.getElementById(this.element).innerHTML = this._view.viewNotes();
  };

  exports.NoteController = NoteController;

})(this)
