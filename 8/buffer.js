const fs = require("fs");
const http = require("http");
const file = "./powder-day.mp4";

const server = http.createServer((res, req) => {
  fs.readFile(file, "binary", (error, data) => {
    if (error) {
      console.log("Error:", error);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
    res.writeHead(200, {
      "Content-Type": "video/mp4",
      "Content-Length": data.length,
    });
    res.end(data);
  });
});

server.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
