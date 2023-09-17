function delay(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

console.log("Starting delays");

delay(2, () => {
  console.log("two seconds");
  delay(1, () => {
    console.log("three seconds");
    delay(1, () => {
      console.log("four seconds");
    });
  });
});

// Starting delays
// two seconds

// Starting delays
// two seconds
// three seconds
// four seconds
