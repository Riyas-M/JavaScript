/* 
    Async-Await Example 1

    Higher-Order Functions
*/

// Async filtering function
async function asyncFilter(array, predicate) {
  const results = await Promise.all(array.map(predicate));
  return array.filter((_value, index) => results[index]);
}
// Example
async function isOddNumber(n) {
  await delay(100); // Simulating asynchronous operation
  return n % 2 !== 0;
}
async function filterOddNumbers(numbers) {
  return asyncFilter(numbers, isOddNumber);
}
filterOddNumbers([1, 2, 3, 4, 5]).then(console.log);

// Output: [1, 3, 5]

/* 
    Async-Await Example 2
    
    Controlling Concurrency
*/

async function asyncPool(poolLimit, array, iteratorFn) {
  const result = [];
  const executing = [];
  for (const item of array) {
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    result.push(p);
    if (poolLimit <= array.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= poolLimit) {
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(result);
}

// Example
async function uploadFile(file) {
  // File upload logic
}

async function limitedFileUpload(files) {
  return asyncPool(3, files, uploadFile);
}

/* 
    Async-Await Example 3
    
    Recursion with Async/Await
*/

// Async recursive search function
async function asyncRecursiveSearch(nodes) {
  for (const node of nodes) {
    await asyncProcess(node);
    if (node.children) {
      await asyncRecursiveSearch(node.children);
    }
  }
}
// Example
async function asyncProcess(node) {
  // Asynchronous processing logic for nodes
}
