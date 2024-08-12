function passingExam (myPoints) {
	return new Promise(function(resolve, reject) {
    // write your function here
      if (myPoints >= 90) {
        resolve("You are enrolled!");
      } else {
        reject("Sorry, you haven't passed the Math exam");
      }
  });
}
