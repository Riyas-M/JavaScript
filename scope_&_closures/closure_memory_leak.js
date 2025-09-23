/* Why Can Closures Cause Memory Leaks? 

A closure keeps a reference to its outer variables.
    -   If those variables are large objects or DOM elements, they stay in memory as long as the closure exists.
    -   Even if you don’t need them anymore, the garbage collector can’t free them because the closure is still holding on.
👉 This can lead to memory leaks if you’re not careful.

*/


/* Example: Event Listener Leak */
function attachHandler() {
  let bigData = new Array(1000000).fill("leak!"); // large object

  document.getElementById("btn").addEventListener("click", function () {
    console.log("Button clicked:", bigData[0]);
  });
}

attachHandler();

/*
✅ What happens here:
    -   The anonymous function (closure) remembers bigData.
    -   Even though attachHandler() finished, bigData stays in memory.
    -   As long as the button exists and the event listener is active, bigData cannot be garbage-collected.

*/

/*
How to Fix It
1. Remove Event Listeners
*/

function attachHandler() {
  let bigData = new Array(1000000).fill("leak!");
  const btn = document.getElementById("btn");

  function handler() {
    console.log("Clicked:", bigData[0]);
  }

  btn.addEventListener("click", handler);

  // cleanup after some time or condition
  setTimeout(() => {
    btn.removeEventListener("click", handler);
    bigData = null; // allow garbage collection
  }, 5000);
}


/*
2. Avoid Unnecessary Closures

If you don’t need outer variables, don’t capture them.
*/

// BAD - closure capturing unnecessary data
function bad() {
  let user = { name: "Riyas", age: 30 };
  document.getElementById("btn").addEventListener("click", () => {
    console.log("Button clicked");
  });
}
// 'user' is never used, but still kept in memory!

/* ✅ Fix: Use a plain function that doesn’t capture user. */

/*
3. Manually Nullify Large References

If a closure must exist but you no longer need big data, set it to `null`.
*/