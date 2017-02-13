var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      console.log("Assertion failed |" + assertionToCheck + "| is not truthy. haha try again! :D");
    }
    else {
      console.log("Test Passed!")
    }
  }
};

var reject = {
  isFalse: function(rejectionToCheck) {
    if (rejectionToCheck) {
      console.log("Rejection failed |" + rejectionToCheck + "| is not falsey. haha try again! :D");
    }
    else {
      console.log("Test Passed!")
    }
  }
};

var expect = {
  isEqualTo: function(cond1, cond2) {
    if (cond1 !== cond2) {
      console.log("Equality failed |" + cond1 + " does not match " + cond2 + "| Hahaha try again! :D");
    }
    else {
      console.log("Test Passed!")
    }
  }
};
