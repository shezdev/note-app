window.onload = function() {
  var notelistmodel = NoteListModel();
  var notelistview = NoteListView();
  notelist.setNote("Favourite drink: seltzer");
  document.getElementById("app").innerHTML = notelistview.getHTML(notelist.getNotes());
};
