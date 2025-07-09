// // function declaration
// myFunction();

// function myFunction() {
//   console.log("my functions");
// }

// // function expression
// const newFunction = function () {
//   console.log("My new function");
// };

// (function () {
//   console.log("Anonymous");
// })();

// newFunction();

// const add = (x, y) => {
//   // console.log(x + y);
//   return x + y;
// };

// const multiplier = () => {
//   const additionResult = add(2, 5);

//   console.log("additionResult", additionResult);

//   const multiplierResult = additionResult * 100;

//   console.log(multiplierResult);
// };

// multiplier();

// // const add2 = (x, y) => {
// //   console.log(x+ y);
// // };

// const myPromise = new Promise((resolve, reject) => {
//   const success = false;

//   if (success) {
//     resolve("Task completed successfully!");
//   } else {
//     reject("Something went wrong.");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result); // "Task completed successfully!"
//   })
//   .catch((error) => {
//     console.error(error); // Only runs if rejected
//   });

//   // microtask queue => executes after the synchronous => promise .then and .catch
//   // macrotask queue =>  setTimeout, SetInterval, DOM events

//     // synchronous executes first
//     // microtask queue next
//     // macrotask queue last

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data from API"), 1000);
  });
}

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${data} processed`), 1000);
  });
}

function saveData(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${data} and saved to DB`), 1000);
  });
}

// Chaining the promises
// fetchData()
//   .then((data) => processData(data))
//   .then((processed) => saveData(processed))
//   .then((final) => console.log(final))
//   .catch((err) => console.error(err));

// Output after ~3 seconds: "Data from API processed and saved to DB"

async function handleData() {
  try {
    const data = await fetchData();
    const processed = await processData(data);
    const saved = await saveData(processed);
    console.log(saved);
  } catch (err) {
    console.error(err);
  }
}

handleData();
