const checkingText = (status) => {
    // write your code here
    return new Promise((resolve, reject) => {
        if (status === "success") {
            resolve("Your text is correct");
        } else {
            reject("Your text is incorrect");
        }
    });

}