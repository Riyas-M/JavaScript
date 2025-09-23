
### Scope in JS

- #### What is Scope ?
    **Scope** : A variable’s scope is the part of a program where it is available for use.
    JavaScript variables are lexically scoped, meaning that we can determine a variable’s scope from where it is declared in the source code. (This is not entirely true: `var` variables are not lexically scoped)


- #### How Scope work
    As expected, we can access variables from their direct scope (the scope where they get declared). We can also access variables from their inner scopes (the scopes that nest within their direct scope). That is, we can access variables from the scope they get declared in and from every inner scope.

    - **var:**
        - They are not block scoped.
        - introduced in es5 and earlier
        - **Hoisted** (moved to the top of scope) and initilize as `undefined`
        - can be redeclared and updated.

    - **let:**
        - Introduced in **es6 (2016)**
        - **Block Scoped** `({...})`
        - **Hoisted** (but not initilized) causes Temporal Dead Zone (TDZ)
        - can be redeclared and updated.
        - can be updated, but not **redeclared** in the same scope.

    - **const:**
        - Also introduced in **es6 (2016)**
        - **Block-Scoped**
        - Must be initilized at declaration
        - cannot be reassigned, but object/Arrays declared with `const` **can be mutated**


- #### Considerations

   - **Scope of let, const, and var in JavaScript** We can create variables with the `let`, `const`, and `var` declarations.
        For `let` and `const`, block scoping works as explained above. However, `var` behaves differently.
    
   - **let and const:** `let` and `const` create block-scoped variables. When declared within a block, they are only accessible within that block
    
   - **var:** Variables created with `var` are scoped to their nearest function or the global scope. 


| Feature | var     | let       |       const |
| :------ | :----: | -----: | -----: |
| Scope             | Function / Global                 | Block             | Block |
| Hoisting          | Yes (inititlized undefined) ✅    | Yes (TDZ) 🚧     | Yes (TDZ) 🚧 |
| Redeclaration     | ✅ Allowed                        | ❌ Not Allowed   | ❌ Not Allowed |
| Reassignment      | ✅ Allowed                        | ✅ Allowed       | ❌ Not Allowed |
| Initialization    |  Optional                         | Optional          | Optional |



- #### Conclusion:

    - Scope refers to the part of a program where we can access a variable. JavaScript allows us to nest scopes, and variables declared in outer scopes are accessible from all inner ones. Variables can be globally-, module-, or block-scoped.
    
    - A closure is a function enclosed with references to the variables in its outer scope. Closures allow functions to maintain connections with outer variables, even outside the scope of the variables.
    
    - There are many uses of closures, from creating class-like structures that store state and implement private methods to passing callbacks to event handlers.

    - **Best Practices**
      - Use `const` by default
      - Use `let` if you need re-assignment
      - Avoid `var` (for cleaner, predictable scoping)



- ### Closures in JS

- #### What is Closures ?
    **Closures** : In JavaScript, is the combination of a function and the lexical environment within which that function was declared. This means that an inner function retains access to the variables and parameters of its outer (enclosing) function, even after the outer function has finished executing. 


- #### Key characteristics of closures:

    - **Lexical Scoping:** JavaScript uses lexical scoping, meaning that functions are executed using the variable scope that was in effect when they were defined, not when they are invoked. A closure leverages this by allowing an inner function to "remember" the environment it was created in.
    
    - **Access to Outer Scope Variables:** The inner function within a closure can access and manipulate variables declared in its outer function's scope, including parameters passed to the outer function.
    
    - **Persistence of State:** Even after the outer function has completed its execution and its execution context has been popped off the call stack, the inner function (the closure) still maintains a reference to the outer function's variables. This allows the inner function to preserve and update that state across multiple calls. 


- #### Common use cases for closures:

    - **Data privacy/Encapsulation:** Creating private variables and methods that are only accessible within the closure.
    
    - **Creating factory functions:**  Functions that generate other functions with pre-configured settings.
    
    - **Event handling:** Attaching event listeners that have access to specific data from their creation context.

    - **Currying and Memoization:** Functional programming techniques that benefit from state preservation.


- #### Conclusion:

    - Closures keep outer variables alive.
    - If those variables are large or unnecessary, they cause memory leaks.

    - **Best Practices**
      - Remove event listeners when not needed.
      - Avoid capturing unused variables.
      - Nullify references to release memory.










