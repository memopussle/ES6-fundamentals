
# JavaScript ES6

- Write shorter JavaScript andmore efficient

### Let, const

- ```Let```: for variables can be reassigned or changable

- Const:  for variables cannot be reassigned or changable


### Arrow functions

- Shorter and neater than normal functions


```
const double = function(x) {
  return x * 2;
}
```

```
const double = (x) => {
  return x * 2;
}

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

car.getSpeed();
// -> undefined, Window

car.getSpeed2();
// -> 20, { speed: 20, getSpeed: ... }

}
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