/* 
    In addition to block scopes, variables can be scoped to the global and module scope.
*/

/* 
Global Scope
    In a web browser, the global scope is at the top level of a script.
    It is the root of the scope tree that we described earlier, and it contains all other scopes.
    Thus, creating a variable in the global scope makes it accessible in every scope:
*/

`<script>
    const foo = "foo";
</script>
<script>
    console.log(foo); // "foo"

    function bar() {
        if (true) {
            console.log(foo);
        }
    }

    bar(); // "foo"
</script>`


/* 
Module Scope
    Each module also has its own scope.
    Variables declared at the module level are only available within that module – they are not global:
*/

`<script type="module">
    const foo = "foo";
</script>
<script>
    console.log(foo); // Uncaught ReferenceError: foo is not defined
</script>`