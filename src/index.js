window.onload = function() {
  var list = new NoteListModel();
  list.setNote("Favourite drink: seltzer");
  var controller = new NoteController(list,"app");
  controller.htmlInserter();
  // document.getElementById("app").innerHTML = view.viewNotes();

};
