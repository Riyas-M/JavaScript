document.body.addEventListener('click', () => {
  console.log('Click Event triggered'); // Macrotask
});

Promise.resolve().then(() => console.log('Promise Resolved')); // Microtask
console.log('End');


// Output: End, Promise Resolved, Click Event triggered