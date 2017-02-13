var reject = {
  isFalse: function(rejectionToCheck) {
    if (rejectionToCheck) {
      throw new Error("Rejection failed |" + rejectionToCheck + "| is not falsey. haha try again! :D");
    }
  }
};
