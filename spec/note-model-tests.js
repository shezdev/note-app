

function testNoteModelReturnsText() {
  var note = new NoteModel("My favourite language is JavaScript");
  assert.isTrue(note.getText() === "My favourite language is JavaScript");
}
console.log("1. Has a method that will return the note text.");
testNoteModelReturnsText();
