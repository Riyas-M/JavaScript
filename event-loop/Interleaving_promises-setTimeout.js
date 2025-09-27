setTimeout(() => console.log('A'), 0);
Promise.resolve().then(() => console.log('B'));
setTimeout(() => console.log('C'), 0);
Promise.resolve().then(() => console.log('D'));



//Output: B, D, A, C