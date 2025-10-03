/*
*   generator Example 1
*
*   function declaration:
*/
function* genFunc() {
    // some logic
}
let generatorObj1 = genFunc();



/*
*   generator Example 2
*
*   function expression:
*/
const genFunc = function* () {
    // some logic
};
let generatorObj2 = genFunc()


//Using async functions.
async function doAsyncOps () {
    var val = await asyncOperation();
    val = await asyncOperation(val);
    val = await asyncOperation(val);
    return await asyncOperation(val);
}



/*
*   generator Example 3
*
*   generator method definition in an object literal:
*/
let obj3 = {
    * generatorMethod() {
        // some logic
    }
};
let generatorObj3 = obj3.generatorMethod();



/*
*   generator Example 4
*
*   Return keyword
    - When a return statement is encountered within a generator function, it exits the generator's execution and returns a specific value.
    This effectively ends the generator's ability to yield further values.
    -  its purpose is to terminate the function and return the current value.
*/
function* greetUsers(name) {
        yield "Hello!";
        return name;
        yield "How are you";
    }
    const welcomeGenerator = greetUsers("Riyas Mohammed");
    
    console.log(welcomeGenerator.next());
    console.log(welcomeGenerator.next());
    console.log(welcomeGenerator.next());

// output
// { value: 'Hello!', done: false }
// { value: 'Riyas Mohammed', done: true }



/*
*   generator Example 5
*
*   Implementing iterables via generators
*/
// The asterisk after `function` means that`objectEntries` is a generator
function* objectEntries(obj) {
  // Reflect is a built-in object that provides methods for interceptable JavaScript operations.
  // Reflect.ownKeys returns an array of the target object's own (not inherited) property keys.
  // https://twitter.com/nilssolanki/status/659839340592422912
  let propKeys = Reflect.ownKeys(obj);

  for (let propKey of propKeys) {
    // `yield` returns a value and then pauses the generator. Later, the execution continues where it was previously paused.
    yield[propKey, obj[propKey]];
  }

}
// Usage
let user = {first: 'Riyas', last: 'Mohammed'};
for (let [key, val] of objectEntries(user)) {
  console.log(`${key}: ${val}`);
}
// Output:
// first: Riyas
// last: Mohammed




/*
*   generator Example 6
*
*   Generators for Async handling
*/

// Without generator
function makeAjaxCall(url,cb) {
  // do some ajax fun
  // call `cb(result)` when complete
}

makeAjaxCall('http://fakeUrl-1', function(res1){
  var data = JSON.parse(res1);

  makeAjaxCall('http://fakeUrl-2/?id=' + data.id, function(res2){
    var resp = JSON.parse(res2);
    console.log('The value is:' + resp.value);
  });
});

// With generator
function request(url) {
  // this is where we're hiding the asynchronicity,
  // away from the main code of our generator
  // `it.next(..)` is the generator's iterator-resume
  // call
  makeAjaxCall(url, function(response){
    it.next(response);
  });
  // Note: nothing returned here!
}

function *main() {
  var res1 = yield request('http://fakeUrl-1');
  var data = JSON.parse(res1);

  var res2 = yield request('http://fakeUrl-2/?id=' + data.id);
  var resp = JSON.parse(res2);
  console.log('The value is:' + resp.value);
}

var it = main();
it.next(); // get it all started



/**
 *  generator Example 7
 * 
 *  Iterating over trees
 */
// Consider the following data structure for binary trees.
// It is iterable, because it has a method whose key is Symbol.iterator.
// That method is a generator method and returns an iterator when called.
class BinaryTree {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  // Prefix iteration
  *[Symbol.iterator]() {
    yield this.value;
    if (this.left) {
      yield* this.left;
    }
    if (this.right) {
      yield* this.right;
    }
  }
}

// The following code creates a binary tree and iterates over it via for-of:
let tree = new BinaryTree('a',
  new BinaryTree('b',
    new BinaryTree('c'),
    new BinaryTree('d')),
  new BinaryTree('e'));

for (let x of tree) {
  console.log(x);
}
// Output:
// a
// b
// c
// d
// e


/**
 * You can only yield in generators -- yielding in callbacks doesn’t work
 */
function* genFunc() {
    ['a', 'b'].forEach(x => yield x); // SyntaxError
}

// Refactored
function* genFunc() {
    for (let x of ['a', 'b']) {
        yield x; // OK
    }
}



/**
 *  generator Example 8
 * 
 *  Infinite Fibonacci sequence using generators
 */
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

var gen = fibonacci();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
console.log(gen.next().value); // 8