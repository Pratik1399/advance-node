var fs = require("fs");
var { promisify } = require("util");

var writeFile = promisify(fs.writeFile);

writeFile("sample.txt", "This is a simple")
  .then(() => console.log("file successfully created"))
  .catch((error) => console.log("error creating file"));
// var delay = (second, callback) => {
//   if (second > 3) {
//     callback(new Error(`${second} seconds it too long!`));
//   } else {
//     setTimeout(() => {
//       callback(null, `the ${second} second delay is over.`);
//     }, second);
//   }
// };

// var promiseDelay = promisify(delay);

// promiseDelay(5)
//   .then(console.log)
//   // .catch((error)=>console.log("error:${error.message}"));
//   .catch((error) => console.log(`error:${error.message}`));

// the 2 second delay is over

// error: ${error.message}

// error: 5 seconds it too long!

// file successfully created
