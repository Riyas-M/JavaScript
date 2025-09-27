console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
  Promise.resolve().then(() => {
    console.log('Promise 1');
  }).then(() => {
    console.log('Promise 2');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 3');
  setTimeout(() => {
    console.log('Timeout 2');
  }, 0);
  return Promise.resolve();
}).then(() => {
  console.log('Promise 4');
});

console.log('End');



/*
Output:

Start (Synchronous)
End (Synchronous)
Promise 3 (Microtask from first Promise)
Promise 4 (Chained Microtask)
Timeout 1 (Macrotask from first setTimeout)
Promise 1 (Microtask within Timeout 1)
Promise 2 (Chained Microtask within Timeout 1)
Timeout 2 (Macrotask from setTimeout inside Promise)

*/