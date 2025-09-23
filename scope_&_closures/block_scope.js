/* the if statement introduces a block scope by using a block statement. We say that foo is block-scoped to the if statement. 
This means it can only be accessed from within that block.

If we try to access foo outside of the block, 
we get a ReferenceError because it is out of scope:
*/

if (true) {
    const abc = "foo";
    console.log(abc); // "foo"
}
console.log(abc); // Uncaught ReferenceError: abc is not defined

 
/*for and while */
function sayFoo() {
    const abc = "foo";
    console.log(abc);
}

sayFoo(); // "foo"
console.log(abc); // Uncaught ReferenceError: abc is not defined