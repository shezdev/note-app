function testCircleRadiusDefaultsToNot10() {
  var circle = new Circle();
  reject.isFalse(circle.radius === 10);
}
console.log("1. testCircleRadiusDefaultsToNot10();")
testCircleRadiusDefaultsToNot10();

function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();
  assert.isTrue(circle.radius === 10);
}
console.log("2. testCircleRadiusDefaultsTo10();")
testCircleRadiusDefaultsTo10();

function testCircleRadiusEqualDiameter() {
  var circle = new Circle();
  expect.isEqualTo(circle.radius, 10);
}
console.log("3. testCircleRadiusEqualDiameter();")
testCircleRadiusEqualDiameter();
