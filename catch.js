// catching an error of a function that’s deferred so that it is called in the
// future is not possible. This yields an uncaught exception and the catch block doesn’t execute:
try {
  setTimeout(function () {
    throw new Error('here');
  }, 10);
} catch (e) { console.log("testing") }


// setTimeout(function () {
//   throw new Error('here');
// }, 10);
