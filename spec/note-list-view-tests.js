function testNoteListModelViewDisplaysHTMLNoteList() {
  var list = new NoteListModel();
  list.setNote("Favourite drink: seltzer");
  var view = new NoteListView(list);
  assert.isTrue(view.getHTML() === "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
}
console.log("4. Has a method that will return the list of notes as HTML");

testNoteListModelViewDisplaysHTMLNoteList();
