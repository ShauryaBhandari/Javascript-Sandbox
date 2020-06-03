const user = { email: "jdoe@gmail.com" };
// try is to write code and test for it
try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError
  // eval('Hello World');

  // Will produce a URIError
  // decodeURIComponent('%');

  if (!user.name) {
    //throw 'User has no name';
    throw new SyntaxError("User has no name");
  }
} catch (e) {
  // catch block is to catch any errors found in the try block
  // er/err/error is the error object
  console.log(`User Error: ${e.message}`);
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
  //  this runs irrespective of the result of try block
  console.log("Finally runs regardless of result...");
}

console.log("Program continues...");
