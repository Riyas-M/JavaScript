/* 
    Async-Await Example 1

    Converting Promises to Async Functions
*/

//Using promises
function doAsyncOps () {
    return asyncOperation().then(function(val) {
        console.log(val);
        return val;
    });
}

//Using async functions.
async function doAsyncOps () {
    var val = await asyncOperation();
    console.log(val);
    return val;
}



/* 
    Async-Await Example 2
    
    Chaining Operations
*/

//Using promises
function doAsyncOps () {
    return asyncOperation().then(function(val) {
        return asyncOperation(val);
    }).then(function(val) {
        return asyncOperation(val);
    }).then(function(val) {
        return asyncOperation(val);
    });
}


//Using async functions.
async function doAsyncOps () {
    var val = await asyncOperation();
    val = await asyncOperation(val);
    val = await asyncOperation(val);
    return await asyncOperation(val);
}



/* 
    Async-Await Example 3
    
    Parallel Operations
*/

//Using promises
function doAsyncOps () {
    return Promise.all([asyncOperation(), asyncOperation()])
    .then(function(vals) {
        vals.forEach(console.log);
        return vals;
    });
}

//Using async functions.
async function doAsyncOps () {
    var vals = await Promise.all([asyncOperation(), asyncOperation()]);
    vals.forEach(console.log.bind(console));
    return vals;
}



/* 
    Async-Await Example 4
    
    Handling Rejection
*/


//Using promises
function doAsyncOps () {
    return asyncOperation().then(function(val) {
        return asyncOperation(val);
    }).then(function(val) {
        return asyncOperation(val);
    }).catch(function(err) {
        console.error(err);
    });
}

//Using async functions.
async function doAsyncOps () {
    try {
      var val = await asyncOperation();
      val = await asyncOperation(val);
      return await asyncOperation(val);
    } catch (err) {
      console.err(err);
    }
}



/* 
    Async-Await Example 5
    
    Broken Promises
*/


//Using promises
function doAsyncOps () {
    return new Promise( function(resolve, reject) {
        if ( somethingIsBad ) {
            reject(new Error('something is bad'));
            // OR
            // reject('something is bad');
            // OR
            // throw new Error('something is bad');
        }
        resolve('nothing is bad');
    });
}

//Using async functions.
async function doAsyncOps () {
    // the next line is fine
    throw new Error('something is bad');

    if ( somethingIsBad ) {
        // this one is good too
        throw new Error('something is bad');
    }
    return 'nothing is bad';
}