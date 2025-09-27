Promise.resolve().then(() => {
  console.log('A');
  Promise.resolve().then(() => console.log('B'));
});

console.log('C');


// Output: C, A, B