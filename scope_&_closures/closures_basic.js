function printString(word) {
    return () => console.log(word);
}

const sayString = printString("Have a great day !!!");

sayString(); // "Have a great day !!!"


/*

Recall that there were two interesting points about this example:

The returned function from printString can access the word parameter
The returned function maintains the value of string when sayString is called outside the scope of word
The first point can be explained by lexical scope: the returned function can access word because it exists in its outer scope.

The second point is because of closures: A closure is a function combined with references to the variables defined outside of it. 
Closures maintain the variable references, which allow functions to access variables outside of their scope. 
They “enclose” the function and the variables in its environment.

*/