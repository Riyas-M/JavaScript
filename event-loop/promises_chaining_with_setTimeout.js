console.log('A');

setTimeout(() => {
  console.log('B');
  Promise.resolve().then(() => {
    console.log('C');
  }).then(() => {
    console.log('D');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('E');
}).then(() => {
  console.log('F');
});

console.log('G');


/*
Output:

A (Synchronous)
G (Synchronous)
E (Microtask from first Promise)
F (Chained Microtask)
B (Macrotask from setTimeout)
C (Microtask from Promise inside setTimeout)
D (Chained Microtask)

*/