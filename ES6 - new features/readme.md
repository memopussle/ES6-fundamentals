
# JavaScript ES6

1. Write shorter JavaScript andmore efficient
2. let, const variables replace var.
3. Arrow functions () => {}. Arrow does not have **this** and **arguments** => not replacement of traditional function
4. Rest parameters: group the paremters into a JS array. [...parameters]
5. Spread Operators:  turn an array or a string into comma separated input. ie: const number = [12345] => [...number]


### Let, const

- ```Let```: for variables can be reassigned or changable

- Const:  for variables cannot be reassigned or changable


### Arrow functions

- Shorter and neater than normal functions


```
const double = (x) => {
  return x * 2;
} // = function double(x) {}

```

- If the body of the function is only one line of return value, we can omit the curly braces {}

- Arrow functions do not have this value -> cannot be used as object method

```
const car = {
    speed: 20,
    getSpeed: () => console.log(this.speed, this),
    getSpeed2: function() {
        console.log(this.speed, this)
    }
    }

car.getSpeed();
// -> undefined, Window

car.getSpeed2();
// -> 20, { speed: 20, getSpeed: ... }

```

- Arrow functions CANNOT be used as constructors

```
const A = () => {};
const b = new A(); // TypeError: A is not a constructor

```

-  arrow functions do not have their own arguments object.

```
const argumentLogger = () => {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

argumentLogger(1, 2, 3);
// -> ReferenceError: arguments is not defined
```

- If we define a arguments variables in the global scope, it will be accessed in an arrow function just like any other gloabal variables
```
const arguments = [1, 2, 3];
const logArgument0 = () => {
  // arguments is referring to the arguments constant variable in the global scope
console.log(arguments[0]);
}

logArgument0();
// -> 1
```

### Rest parameters

- group the paremters into a JS array. [...parameters]

- We can choose to only group certain parts of the parameters. But a rest parameter always needs to be the last parameter

```
const restLogger = (a, b, ...restOfParams) => {
  console.log("a: ", a);
  console.log("b: ", b);
  console.log("restOfParams: ", restOfParams);
}

restLogger(1, 2, 3, 4, 5);
// -> a: 1
// -> b: 2
// -> restOfParams: [3, 4, 5]
```

---

## Spread Operator

- In ES5, to supply an array with a list of comma seperated input, we use apply method.

``
// ES5

var friends = ['John', 'Mary'];
var foes = ['Peter', 'Jane'];
var friendsAndFoes = [].concat(friends).concat(foes);
console.log(friendsAndFoes);
// -> ['John', 'Mary', 'Peter', 'Jane']

``

- In ES6, we can use spread operators ... Spread Operators will spread the values in the array as if they are a list of comma seperated inputs. This features are currently **only** supported in Chrome and Firefox

``
const friends = ['John', 'Mary'];
const foes = ['Peter', 'Jane'];
const friendsAndFoes = [...friends, ...foes];
console.log(friendsAndFoes);
// -> ['John', 'Mary', 'Peter', 'Jane']
``


- Spread operator also works on strings

```
const splitStrings = [..."abcdefg"]; // split string into individual character
console.log(splitStrings);
// -> ["a", "b", "c", "d", "e", "f", "g"]

```

---

## Default parameters

- In ES6, we can set default parameters of a function
```
const multiply = (a, b = 1) => {
  return a * b;
}
multiply(2); //-> 2 
```

## Enhanced object
 
- In ES6, property is shorter by assigning key value pairs from variables

```
// ES6

const name = 'Peter';
const age = 20;
const student = { name, age };
console.log(student);
// -> { name: 'Peter', age: 20 }
```

- ES6 is able to assign computed property keey name during the object definition

```
let count = 1;
const inventory = {
  [count++] : "Apples",
  [count++] : "Oranges"
}
console.log(inventory);
// -> { 1: "Apples", 2: "Oranges" }
```