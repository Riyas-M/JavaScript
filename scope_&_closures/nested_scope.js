/* JavaScript allows nested blocks and therefore nested scopes. Nested scopes create a scope tree or scope chain.

Consider the code below, which nests multiple block statements:
*/

if (true) {
    const abc = "foo";
    console.log(abc); // "foo"

    if (true) {
        const bar = "bar";
        console.log(abc); // "foo"

        if (true) {
            console.log(abc, bar); // "foo bar"
        }
    }
}

 
/* JavaScript also allows us to nest functions: */
function callFoo(params) {
    function callParams() {
        console.log(params);
    }
    callParams();
}

callFoo('ABC'); // "ABC"