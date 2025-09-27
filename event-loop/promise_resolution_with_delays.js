console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
  setTimeout(() => {
    console.log('Timeout 2');
  }, 0);
  return Promise.resolve();
}).then(() => {
  console.log('Promise 2');
});

console.log('End');

/*
Output:

Start (Synchronous)
End (Synchronous)
Promise 1 (Microtask)
Promise 2 (Chained Microtask)
Timeout 1 (Macrotask from first setTimeout)
Timeout 2 (Macrotask from setTimeout inside Promise)

*/