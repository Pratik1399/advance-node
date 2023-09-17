function hideString(str, done) {
  //   return str.replace(/[a-zA-Z]/g, "X");
  //   done(str.replace(/[a-zA-Z]/g, "X"));
  process.nextTick(() => {
    done(str.replace(/[a-zA-Z]/g, "X"));
  });
}

// var hidden = hideString("Hello World");

// console.log(hidden);

hideString("Hello World", (hidden) => {
  console.log(hidden);
});

console.log("end");

// XXXXX XXXXX
// end

// end
// XXXXX XXXXX
