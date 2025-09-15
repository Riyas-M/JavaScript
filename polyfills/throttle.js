/* The throttle function ensures that a function is called at most once every specified period. */

function throttle(fn, limit) {
  let lastCall = 0;

  return function(...args) {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

const throttledFunc = throttle(() => {
  console.log('Throttled function called !!!');
}, 3000);

throttledFunc();
throttledFunc();
throttledFunc();
throttledFunc();

/* 
    The throttle function checks the time elapsed since the last call.
    If it is greater than or equal to the limit, 
    the function is executed and the last call time is updated.
*/
