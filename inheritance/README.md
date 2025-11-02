
## **Inheritance**


- **Inheritance**
    is a mechanism that allows one `object` (or `class`) to use properties and methods of another.
    It promotes code reuse and helps build ***hierarchical relationships between types.***
     
    While JavaScript fundamentally uses ***prototypal inheritance***, the `class` syntax introduced in ***ES6*** provides a more familiar, ***"classical"*** way to implement inheritance.

    Eg: 
    `function foo() {}`
    
    `typeof foo.prototype // ‘object’`
     
&nbsp;


### Types of Inheritance in JavaScript
- #### ***Prototype-based Inheritance (ES5 & before):***
- #### ***Class-based Inheritance (ES6)***
- #### ***Functional Inheritance***

&nbsp;


- #### ***Prototype-based Inheritance (Core Concept):***
    In JavaScript, everything ***(functions, arrays, strings)*** is an `object` and Every JavaScript `object` has an internal link to another `object` called its `prototype`.
    
    That prototype object can itself have a `prototype`, forming a ***prototype chain.***
    
    The prototype stores shared properties and methods, allowing all instances of a type to access them.

    ***When you access a property:***
    - JS first looks at the `object` itself.
    - If not found, it looks up the prototype chain until it reaches `Object.prototype` (the root).
    - If not found there, returns `undefined`.

    ---

- #### ***Class-based Inheritance (ES6+)***
    With ECMAScript6 (ES6), JavaScript introduced the class keyword for classical inheritance. It uses the class-based approach. 
    Eg: when a child `class B` extends a parent `class A`. The child class inherits properties and methods from the parent class.
    
    This method uses the `class` and `extends` keywords to define a parent-child relationship between classes.
    
    - `extends` keyword: Used to declare that a class inherits from another class.
    
    - `super()` keyword: Used within the child class's constructor to call the parent class's constructor, ensuring proper initialization of inherited properties. It can also be used to call parent class methods.

    ***Method Overriding***: Child classes can provide their own implementation of methods inherited from the parent class, effectively overriding the parent's version.

---

- #### ***Functional Inheritance***
    Functional inheritance in JavaScript is a pattern for creating new objects that inherit features from other objects by using augmenting functions, often without relying on the prototype chain. 
    
    Objects can inherit methods and properties from other objects using function constructors. 
    
    Through functions, they create objects and build relationships.

    Key Characteristics of Functional Inheritance:
    - ***Composition over Inheritance:*** It promotes building objects by composing them from smaller, specialized functions rather than relying on a strict class hierarchy.
    
    - ***Closures for Privacy:*** Private data can be effectively managed using closures.
    
    - ***No Prototype Chain:*** Unlike prototypal inheritance, functional inheritance typically doesn't directly manipulate the prototype chain, simplifying the inheritance mechanism for some use cases.
    
    - ***Dynamic Object Extension:*** It involves dynamically adding properties and methods to an object instance within the augmenting function.
    
    The following are the ways to achieve functional inheritance in JavaScript:
    - ***Constructor Overriding***.
    - ***Inheritance from built-in data types***

&nbsp;


### Key Points to Remember:
| **Concept** | **Description** |
| :------ | :----: |
| `Object.create(proto)`  | Creates an object inheriting from proto. |
| `__proto__ `            | Internal link to prototype (avoid using directly in production). |
| `prototype`             | Property of constructor functions / classes used for inheritance. |
| `super`                 | Calls parent constructor or methods. |
| `extends`               | Defines inheritance between classes. |

&nbsp;


### Advantages of JavaScript Inheritance:
 Some benefits of JS inheritance are:
  - **_Consistency:_**
    Inheritance ensures that the derived classes use the same base class and have a standard set of methods and properties, which promotes consistency within software.

  - **_Code Reusability:_**
    A child class can inherit the functionality of the parent class, enhancing the code reusability.

  - **_Scalability:_**
    It also improves scalability because you can add new classes to the existing hierarchy without much effort. The new child class can acquire the properties and methods of the base class and integrate new functionalities according to the requirement.

  - **_Reduced Code Duplication:_**
    As derived classes use the properties and methods defined in the base class, code duplication is reduced significantly.

  - **_Code Maintenance:_**
    You can maintain the code easily by dividing it into sub-classes.

  - **_Faster Development:_**
    As you use the existing code and don’t need to spend time writing and testing it repeatedly, it improves the development speed. You can focus on other aspects of the derived class to streamline the process.

  - **_Easier Debugging:_**
    Developers can use the well-structured class hierarchy to find and resolve issues within a program as they know the location of the common functionality. Inheritance also makes debugging and troubleshooting less complex.

  - **_Functionality Extension:_**
    You can easily add new methods and properties to extend the functionality of the parent class in a child class.

  - **_Resource Optimization:_**
    When you reuse the code, you can optimize resource utilization, including memory usage and CPU time, which makes the software more efficient.

&nbsp;


### Summary:
| **Level** | **Concept** | **Example** |
| :------ | :----: | :----: |
| Base          | Prototype Chain       | `Object.create(proto)`        |
| ES6           | Class Inheritance     | `class Dog extends Animal {}` |
| Parent Access | `super()`             | Calls parent constructor or method |
| Static        | Shared on constructor | `static methodName()`        |

&nbsp;


### ***Conclusion:***

   - We can achieve inheritance in JavaScript through objects, where each object has an internal link to another object, known as its prototype.
   - Inheritance in JavaScript means passing down features and attributes from a parent object to a child to reuse the code and build upon the features of the existing object. JavaScript implements inheritance through objects, and each object has an internal link to another one known as its prototype.


&nbsp;


## Acknowledgements

 - [Javascript-inheritance](https://www.geeksforgeeks.org/javascript/javascript-inheritance/)
 - [inheritance](https://www.programiz.com/javascript/inheritance)
 - [Prototypal Inheritance in JavaScript](https://medium.com/@kevincennis/prototypal-inheritance-781bccc97edb)
-  [class-inheritance](https://javascript.info/class-inheritance)
- [javascript_inheritance](https://www.tutorialspoint.com/javascript/javascript_inheritance.htm)