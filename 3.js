// var delay = (second, callback) => {
//   setTimeout(callback, second * 1000);
// };

var delay = (second, callback) => {
  if (second > 3) {
    callback(new Error(`${second} seconds it too long!`));
  } else {
    setTimeout(() => {
      callback(null, `the ${second} second delay is over`);
    }, second);
  }
  //   new Promise((resolves, rejects) => {
  //     // setTimeout(resolves, second * 1000);

  //     if (second > 3) {
  //       rejects(new Error(`${second} is too long!`));
  //     }

  //     // throw new Error("argh");

  //     setTimeout(() => {
  //       resolves("the long delay has ended");
  //     }, second * 1000);
  //   });

  // delay(1, () => {
  //   console.log("the delay has ended");
  // });

  // delay(1).then((message) => console.log("the delay has ended"));

  // delay(1).then((message) => console.log(message));
};
// delay(1)
//   .then(console.log)
//   .then(() => 42)
//   .then((number) => console.log(`hello world:${number}`))
//   .catch((error) => `error:${error.message}`);

// delay(2, (error, message) => {
delay(4, (error, message) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(message);
  }
});

console.log("end first tick");

// end first tick
// the delay has ended

// end first tick
// the long delay has ended

// end first tick
// the long delay has ended
// hello world:42

// end first tick

// end first thick
// the 2 second delay is over

// 4 seconds it too long!
// end first tick
