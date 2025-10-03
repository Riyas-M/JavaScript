/**
 * PROMISES EXAMPLES 1
 * 
 *  Promise.all() Method
 * 
 * 
 *  - You can use the “Promise.all()” method to check if all parallel asynchronous operations have been completed.
 *  - Chaining asynchronous operations that don’t need to wait for each other can extend the overall execution time of the process.
 *  - When all Promise operations in the array resolve, all the data in the arrays are successfully returned.
 *  - If any Promise in the array is rejected, the result of “Promise.all()” will also be rejected.
 * 
 * 
 * Note:
 *    that in an instance where any input promises are rejected,
 *    the returned promise will also be rejected with the value of the first rejected promise.
 */

const p1 = Promise.resolve('ABC');
const p2 = 'PQR';
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'foo');
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// output: ['ABC', 'PQR', 'foo']



/**
 * PROMISES EXAMPLES 2
 * 
 *  Promise.all() Method
 * 
 *  - The “Promise.race()” method, as specified, is the process of racing the promises within an array.
 *  - The value of the first completed promise becomes valid.
 *  - Whether the result is resolved or rejected doesn’t matter; the result of the first completed promise is returned.
 * 
 *  Eg:
 *    - When both of these promises are invoked simultaneously with “Promise.race()”, the promises start executing.
 *    - The data from the first Promise that resolves is returned within “Promise.race()”, so we receive the “two” output defined within promise2.
 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'Promise 1 is returned');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Promise 2 is returned');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});

// output: Promise 2 is returned