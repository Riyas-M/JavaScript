/**
 * ES6 Promises
 *
 * @Exercise:
 * http://jsbin.com/tuqukakawo/1/edit?js,console,output
 */

/**
 * PROMISES EXAMPLES 1
 * 
 *  Initialize a promise
 * 
 * 
 *  resolve(): function to call if an operation completes successfully
 *  reject(): function to call if an operation fails
 */

const myPromise = new Promise(function(resolve, reject) {console.log('true')})



/**
 * PROMISES EXAMPLES 2
 * 
 *  Consume a Promise
 * 
 * 1. Obtain a reference to the promise
 * 2. Attach callbacks to the promise
 * 3. Wait for the promise to be fulfilled or rejected
 */

myPromise
.then((result) => {         //  Once the promise is fulfilled, the .then callback method will be called with the resolved value
    console.log(result);
})
.catch((error) => {
    console.log(error);     //  if the promise is rejected, the .catch method will be called with an error message.
})
.finally(() => {
    //code here will be executed regardless of the status
    //of a promise (fulfilled or rejected)
});






/**
 * PROMISES EXAMPLES 3
 * 
 *  Promise chaining:
 * 
 * 1. Obtain a reference to the promise
 * 2. Attach callbacks to the promise
 * 3. Wait for the promise to be fulfilled or rejected
 */

fetch('https://example.com/data')
    .then(response => response.json())
    .then(data => processData(data))
    .then(processedData => {
        // do something with the processed data
    })
    .catch(error => console.log(error))




/**
 * PROMISES EXAMPLES 4
 * 
 *  Error Handling:
 * 
 * 1. The fetch() function makes a request to the GitHub API to fetch user data.
 * 2. The "try-catch" block is used inside the second .then method to handle any error that may occur when processing the data received from the server.
 */

fetch("https://api.github.com/users/octocat")
  .then((response) => response.json())
  .then((data) => {
    try {
      //processing received data
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  })
  .catch((error) => console.log(error));    //And the outer .catch method will only catch errors that occur during the fetch request.