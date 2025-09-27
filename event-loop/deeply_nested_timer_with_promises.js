setTimeout(() => {
  console.log('Timer 1');
  Promise.resolve().then(() => {
    console.log('Microtask 1');
    Promise.resolve().then(() => {
      console.log('Microtask 2');
    });
  });
}, 0);

Promise.resolve().then(() => {
  console.log('Microtask 3');
});



/*
Output:

Main Task (Synchronous)
Microtask 3 (Microtask from Promise)
Timer 1 (Macrotask from setTimeout)
Microtask 1 (Microtask within setTimeout)
Microtask 2 (Chained Microtask from Microtask 1)

*/