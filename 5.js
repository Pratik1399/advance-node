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

async function start() {
  var files = await readdir(__dirname);
  console.log(files);
}

start();

// const doStuffSequentially = async () => {
//   console.log("starting");
//   await delay(1);
//   console.log("waiting");
//   await delay(2);
//   try {
//     await writeFile("file.txt", "Sample.txt");
//     beep();
//   } catch (error) {
//     console.error(error);
//   }
//   console.log("file.txt created");
//   await delay(3);
//   await unlink("file.txt");
//   beep();
//   console.log("file.txt removed");
// };

// const doStuffSequentially = async () =>
//   Promise.resolve()
//     .then(() => console.log("Starting"))
//     .then(() => delay(1))
//     .then(() => "waiting")
//     .then(console.log)
//     .then(() => delay(2))
//     .then(() => writeFile("file.txt", "Sample File..."))
//     .then(beep)
//     .then(() => "file.txt created")
//     .then(console.log)
//     .then(() => delay(3))
//     .then(() => unlink("file.txt"))
//     .then(beep)
//     .then(() => "file.txt removed")
//     .then(console.log)
//     .catch(console.error);

// doStuffSequentially()
//   .then(() => console.log("again again!!!"))
//   .then(() => doStuffSequentially())
//   .then(() => console.log("enough already..."));

// const doStuffSequentially = () => {
//   console.log("starting");
//   setTimeout(() => {
//     console.log("waiting");
//     setTimeout(() => {
//       console.log("waiting some more");
//       fs.writeFile("file.txt", "Sample File...", (error) => {
//         if (error) {
//           console.log(error);
//         } else {
//           beep();
//           console.log("file.txt created");
//           setTimeout(() => {
//             beep();
//             fs.unlink("file.txt", (error) => {
//               if (error) {
//                 console.error(error);
//               } else {
//                 console.log("file.txt removed");
//                 console.log("sequential execution complete");
//               }
//             });
//           }, 3000);
//         }
//       });
//     }, 2000);
//   }, 1000);
// };

// doStuffSequentially();

// starting

// waiting

// waiting some more

// file.txt created

// file.txt removed

// sequential execution complete

// starting

// waiting

// file.txt created

// file.txt removed

// [
//   ".git",
//   ".gitignore",
//   "1.js",
//   "2.js",
//   "3.js",
//   "4.js",
//   "5.js",
//   "README.md",
//   "sample.txt",
// ];
