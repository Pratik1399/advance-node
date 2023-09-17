var fs = require("fs");
var { promisify } = require("util");
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir);

var beep = () => process.stdout.write("\x07");

var delay = (second) =>
  new Promise((resolve) => {
    setTimeout(resolve, second * 1000);
  });

Promise.all([
  delay(5),
  delay(2),
  delay(3),
  delay(5),
  //   writeFile("readme.md", "Hello World"),
  //   unlink("readme.md"),
  //   unlink("readme.txt"),
  //   delay(3),
  //   unlink("readme.json"),
  //   writeFile("readme.txt", "Hello World"),
  //   writeFile("readme.json", '{"Hello":"World"}'),
])
  .then(() => readdir(__dirname))
  .then(console.log);

// [
//   ".git",
//   ".gitignore",
//   "1.js",
//   "2.js",
//   "3.js",
//   "4.js",
//   "5.js",
//   "6.js",
//   "README.md",
//   "readme.json",
//   "readme.txt",
//   "sample.txt",
// ];

// [
//   ".git",
//   ".gitignore",
//   "1.js",
//   "2.js",
//   "3.js",
//   "4.js",
//   "5.js",
//   "6.js",
//   "sample.txt",
// ];
