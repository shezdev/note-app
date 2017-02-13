function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();
  assert.isTrue(circle.radius === 50);
}
testCircleRadiusDefaultsTo10();

function testCircleRadiusDefaultsToNot10() {
  var circle = new Circle();
  reject.isFalse(circle.radius === 10);
}
testCircleRadiusDefaultsToNot10();
