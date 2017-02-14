function testNoteListModelIsArray() {
  var noteList = new NoteListModel();
  assert.isTrue(Array.isArray(noteList.getNotes()));
}

console.log("2. Has a method that will return the list of notes.");
testNoteListModelIsArray();


function testNoteListModelAddsNote() {
  var noteList = new NoteListModel();
  noteList.setNote("hello");
  assert.isTrue(noteList.getNotes().length === 1);
}

console.log("3. Has a method that will create and save a new note.");
testNoteListModelAddsNote();


// function testCircleRadiusEqualDiameter() {
//   var circle = new Circle();
//   expect.isEqualTo(circle.radius, 10);
// }
// console.log("3. testCircleRadiusEqualDiameter();")
// testCircleRadiusEqualDiameter();
