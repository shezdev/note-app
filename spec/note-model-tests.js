// function testCircleRadiusDefaultsToNot10() {
//   var circle = new Circle();
//   reject.isFalse(circle.radius === 10);
// }
// console.log("1. testCircleRadiusDefaultsToNot10();")
// testCircleRadiusDefaultsToNot10();
//
// function testCircleRadiusDefaultsTo10() {
//   var circle = new Circle();
//   assert.isTrue(circle.radius === 10);
// }
// console.log("2. testCircleRadiusDefaultsTo10();")
// testCircleRadiusDefaultsTo10();
//
// function testCircleRadiusEqualDiameter() {
//   var circle = new Circle();
//   expect.isEqualTo(circle.radius, 10);
// }
// console.log("3. testCircleRadiusEqualDiameter();")
// testCircleRadiusEqualDiameter();

function testNoteModelStoreText() {
  var note = new NoteModel("My favourite language is JavaScript");
  assert.isTrue(note.text === "My favourite language is JavaScript");
}
console.log("1. Takes the text of a note upon instantiation and stores the text in a text property on the note.")
testNoteModelStoreText();

function testNoteModelReturnsText() {
  var note = new NoteModel("My favourite language is JavaScript");
  assert.isTrue(note.getText() === "My favourite language is JavaScript");
}
console.log("2. Has a method that will return the note text.")
testNoteModelReturnsText();
