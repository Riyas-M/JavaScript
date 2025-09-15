
### Polyfills

- #### What is Polyfills ?
    **Polyfills** are pieces of code (usually JavaScript) that provide functionality on older browsers that do not natively support certain features. Essentially, polyfills allow developers to use modern web features and APIs while ensuring compatibility with older environments. They act as a bridge between newer and older versions of web technologies.

- #### Why are Polyfills Needed ?
    - **Browser Compatibility** Different browsers and different versions of the same browser may not support - all the latest web standards. Polyfills help ensure that all users have a consistent experience regardless of the browser they use.

    - **Future-Proofing:** As web standards evolve, using polyfills allows developers to write code that         conforms to modern practices, knowing that it will still work in older environments.

    - **Development Convenience:** Polyfills enable developers to use new features and syntax without waiting for full support across all browsers.

- #### How polyfills work
    Polyfills detect if a feature or API is missing in a browser and provide a custom implementation of that feature using existing JavaScript capabilities. This allows developers to write code using the latest JavaScript features and APIs without worrying about browser compatibility issues.

    - **For example**, let's consider the `Array.prototype.includes()` method, which determines if an array includes a specific element. This method is not supported in older browsers like Internet Explorer 11.

- #### Considerations

   - **Selective loading:** Polyfills should only be loaded for browsers that need them to optimize performance.
    
   - **Feature detection:**  Perform feature detection before applying a polyfill to avoid overwriting native implementations or applying unnecessary polyfills.
    
   - **Size and performance:** Polyfills can increase the JavaScript bundle size, so minification and compression techniques should be used to mitigate this impact.

  - **Existing libraries:**  Consider using existing libraries and tools that offer comprehensive polyfill solutions for multiple features, handling feature detection, conditional loading, and fallbacks efficiently

- #### Implementing polyfills

    - **Identify the missing feature:** Determine if the feature is compatible with the target browsers or detect its presence using feature detection methods like typeof, in, or window.
    
    - **Write the fallback implementation:** Develop the fallback implementation that provides similar functionality, either using a pre-existing polyfill library or pure JavaScript code.
    
    - **Test the polyfill:** Thoroughly test the polyfill to ensure it functions as intended across different contexts and browsers.

    - **Implement the polyfill:** Enclose the code that uses the missing feature in an if statement that checks for feature support. If not supported, run the polyfill code instead.

- #### Exisitng Libraries / services for polyfills

    - **core-js**: A modular standard library for JavaScript which includes polyfills for a wide range of ECMAScript features.
        
        - Eg:

            `import 'core-js/actual/array/flat-map'`;

             `[1, 2].flatMap((it) => [it, it]); // => [1, 1, 2, 2]`

    - **Polyfill.io**: A service that provides polyfills based on the features and user agents specified in the request.

            <script src="https://polyfill.io/v3/polyfill.min.js"></script>


- #### Examples:
    - `Array.prototype.includes()`
    - `Array.prototype.map`
    - `Array.prototype.filter`
    - `Array.prototype.reduce`
    - `Array.prototype.forEach`
    - `Function.prototype.call`
    - `Function.prototype.apply`
    - `Function.prototype.bind`
    - `Debounce`
    - `Throttle`
    - `Memoize`
    - `Promise.all`

### And More !!!