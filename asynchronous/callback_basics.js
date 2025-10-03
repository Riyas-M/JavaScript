/**
 * CALLBACK EXAMPLES
*/

console.log("Start execution");

setTimeout(function() {
  console.log("First timeout");
}, 3000);

console.log("End execution");
/**
 *Output

    Start execution
    End execution
    First timeout

*/





/**
 * CALLBACK HELL
 *
 *  A fragile, unreadable sequence of asynchronous operations, represented by nested anonymous functions, idiomatic to node.js applications
 */

getData(function (a) {
  getMoreData(a, function (b) {
    getMoreData(b, function (c) {
      getMoreData(c, function (d) {
        getMoreData(d, function (e) {
          console.log('Callback Hell');
        });
      });
    });
  });
});