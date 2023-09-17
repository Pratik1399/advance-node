const { createReadStream, createWriteStream, write } = require("fs");

const readStream = createReadStream("./8/powder-day.mp4");
const writeStream = createWriteStream("./8/copy.mp4", {
  // highWaterMark: 1628920,
});

readStream.on("data", (chunk) => {
  const result = writeStream.write(chunk);
  if (!result) {
    console.log("backpressure");
    readStream.pause();
  }
});

readStream.on("error", (error) => {
  console.log("an error occurred", error.message);
});

readStream.on("end", () => {
  writeStream.end();
});

writeStream.on("close", () => {
  process.stdout.write("file copied\n");
});
