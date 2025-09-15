/* The debounce function ensures that a function is not called frequently. It delays the function execution until after a certain period has elapsed since the last time it was invoked. */

function debounce(fn, delay) {
  let timeoutId;

  return function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const debouncedFunc = debounce(() => {
  console.log('Debounced function called !!!');
}, 2000);

debouncedFunc();
debouncedFunc();
debouncedFunc();
debouncedFunc();

/* 
    The debounce function sets a timeout each time it is called. 
    If it is called again before the delay period ends, the previous timeout is cleared and a new one is set. 
    This ensures that the function is only executed once the delay period has elapsed without another call.
*/
