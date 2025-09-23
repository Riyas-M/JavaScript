/* 
let and const: 
    let and const create block-scoped variables. When declared within a block, they are only accessible within that block. This behavior was demonstrated in our previous examples:
*/

if (true) {
    const abc = "foo";
    console.log(abc); // "foo"
}
console.log(abc); // Uncaught ReferenceError: abc is not defined


/* 
var
    Variables created with var are scoped to their nearest function or the global scope. They are not block scoped:
*/

function abc() {
    if (true) {
        var foo = "foo";
    }
    console.log(foo);
}

abc(); // "foo"