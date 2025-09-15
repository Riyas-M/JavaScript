/* The memoize function caches the results of function calls to improve performance for expensive computations. */

function memoize(fn) {
  const cache = {};

  return function(...args) {
    let argCache = JSON.stringify(args);

    if (!cache[argCache]) {
      cache[argCache] = fn.call(this, ...args);
    }

    return cache[argCache];
  };
}

const expensiveCalcFunc = (num1, num2) => {
  let output = 1;
  for (let i = 0; i <= 10000000; i++) {
    output += i;
  }

  return num1 + num2 + output;
}

const memoizedFunc = memoize(expensiveCalcFunc);

console.time();
console.log(memoizedFunc(1, 2));
console.timeEnd();

console.time();
console.log(memoizedFunc(1, 2));
console.timeEnd();

/* 
    A memoize function is a higher-order function that takes a function as input and returns a new, memoized version of it.
    It optimizes performance by caching the results of expensive function calls and returning the cached result when the same inputs are encountered again, avoiding redundant computations.
*/