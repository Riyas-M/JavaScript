console.log('A'); // Synchronous

setTimeout(() => {
  console.log('B'); // Macrotask
}, 0);

console.log('C'); // Synchronous


// Output: A, C, B