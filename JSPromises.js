// Wait Until Promises Are Complete

//   One main thing to note about Promise.all is that
//   the method throws an error when one of the promises reject.
//   This would mean that your code will not wait until all your promises are complete.
//eg--1
//Promise.all;
const PromiseArray = [
  Promise.resolve(100),
  Promise.reject(null),
  Promise.resolve("Data release"),
  Promise.reject(new Error("Something went wrong")),
];
Promise.all(PromiseArray)
  .then((data) =>
    console.log("all resolved! here are the resolve values:", data)
  )
  .catch((err) => console.log("got rejected! reason:", err));
//eg-2 Promise.all

Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).catch(alert); // Error: Whoops!

//If one promise rejects, Promise.all immediately rejects, completely forgetting about the other ones in the list. Their results are ignored.

//   Even though some of the promises are rejected,
//    Promise.allSettled returns the results from all your promises.
Promise.allSettled;

const PromiseArray = [
  Promise.resolve(100),
  Promise.reject(null),
  Promise.resolve("Data release"),
  Promise.reject(new Error("Something went wrong")),
];
Promise.allSettled(PromiseArray)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
//[
//{status: "fulfilled", value: 100},
//{status: "rejected", reason: null},
//{status: "fulfilled", value: "Data release"},
//{status: "rejected", reason: Error: Something went wrong ...}
//]

//Promise.race

//Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then((res) => console.log(res)); //1

//promise and async await settimeout exection
const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
  myPromise.then((res) => res).then((res) => console.log(`funcOne--${res}`));
  setTimeout(() => console.log("Timeout! funcOne"), 0);
  console.log("console.log first funcOne");
}

async function funcTwo() {
  const res = await myPromise;
  console.log(res);
  setTimeout(() => console.log("Timeout! funcTwo", 0), 0);
  console.log("console.log second funcTwo");
}

funcOne();
funcTwo();

// console.log first funcOne
// VM30103:5 funcOne--Promise!
// VM30103:12 func two Promise!
// VM30103:14 console.log second funcTwo
// Promise {<fulfilled>: undefined}
// VM30103:6 Timeout! funcOne
// VM30103:13 Timeout! funcTwo 0
