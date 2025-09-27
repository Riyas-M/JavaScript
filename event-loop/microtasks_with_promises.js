console.log("Start");

setTimeout(() => {
  console.log("Timeout");   // Macrotask
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");   // Microtask
});

console.log("End");

// Output
Start
End
Promise
Timeout

/*
Explanation:
    - console.log("Start") and console.log("End") are synchronous and executed immediately.
    - setTimeout is asynchronous and its callback is added to the callback queue.
    - Promise.resolve().then is a microtask, so its callback goes to the microtask queue.
    - Microtasks are processed before tasks in the callback queue, so "Promise" is logged before "Timeout".

The event loop ensures everything is executed in the correct order!
*/