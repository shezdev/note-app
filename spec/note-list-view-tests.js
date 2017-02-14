function testNoteListModelViewDisplaysHTMLNoteList() {
  var view = new View();
  assert.isTrue(view.getHTML() === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>");
}
console.log("3. Has a method that will return the list of notes as HTML");

testNoteListModelViewDisplaysHTMLNoteList();
