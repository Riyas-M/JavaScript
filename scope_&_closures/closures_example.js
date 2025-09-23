/* Callbacks:
    It is common for a callback to reference a variable declared outside of itself. For example:

    model is available in the callback because of lexical scoping, 
    and the value of model is persisted when the anonymous function is called by filter because of a closure.
*/

function getCarsByModel(model) {
    return cars.filter(x => x.model === model);
}



/* Storing state:
    We can use closures to return objects from functions that store state. 
    Consider the following makeNames function which returns an object that can store and change a name:


    This example illustrates how closures do not just freeze the values of variables from a function’s outer scope during creation. 
    Instead, they maintain the references throughout the closure’s lifetime.
*/

function makeNames(name) {
    let _name = name;

    return {
        setName: (newName) => (_name = newName),
        getName: () => _name,
    };
}

var me = makeNames("Riyas");
console.log(me.getName()); // "Riyas"

me.setName("Riyas Mohammed");
console.log(me.getName()); // "Riyas Mohammed"



/* Private methods:
    If you’re familiar with object-oriented programming,
    you might have noticed that our previous example closely resembles a class that stores private state and exposes public getter and setter methods.
    We can extend this object-oriented parallel further by using closures to implement private methods:

    So,
    privateSetName is not directly accessible to consumers and it can access the private state variable _name through a closure.
*/

function makeNames(name) {
    let _name = name;

    function privateSetName(newName) {
        _name = newName;
    }

    return {
        setName: (newName) => privateSetName(newName),
        getName: () => _name,
    };
}


/* React event handlers:
    closures are common in React event handlers. The following Counter component is modified from the React docs:

    So,
    Closures make it possible for:

    The reset, decrement, and increment button click handlers to access setCount
    The reset button to access initialCount from Counter's props
    and the “Show count” button to display the count state.
*/

function Counter({ initialCount }) {
    const [count, setCount] = React.useState(initialCount);

    return (
        <>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>
                -
            </button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                +
            </button>
            <button onClick={() => alert(count)}>Show count</button>
        </>
    );
}

function App() {
    return <Counter initialCount={0} />;
}