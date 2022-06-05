

//arrow functions

const double = (x) => x * 2; //omit return if there is only 1 return line
console.log(double(2));

const foo = () => ({
  a: 1,
  b: 2,
});  // () : no parameters

console.log(foo());


const personObjMaker = (name, age) => ({
    name: name,
    age: age
}); //2 parameters

console.log(personObjMaker('John', 25).age);


//arrow doesn't have this -> cannot be used as an object
const car = {
    speed: 20,
    getSpeed: () => console.log(this.speed, this),
    getSpeed2: function () {
        console.log(this.speed, this)
    }
}

car.getSpeed();
// -> undefined, Window

car.getSpeed2()
// -> 20, { speed: 20, getSpeed: ... }


// arrow functions cannot be used as constructors.
// const A = () => {};
// const b = new A(); // TypeError: A is not a constructor


//arrow functions do not have their own arguments object
// ES6
// const argumentLogger = () => {
//   for (var i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// argumentLogger(1, 2, 3);
// -> ReferenceError: arguments is not defined



// rest parameters
// ES6 allows us to group parameters [...parameters] = [parameter1, parameter2, etc]
const argumentLogger = (...params) => {
  for (var i = 0; i < params.length; i++) {
    console.log(params[i]);
  }
};

argumentLogger(1, 2, 3); // -> 1
// -> 2
// -> 3


//Spread operators on array
const friends = ["Jane", "Mary"];
const foes = ["Jim", "Marie"];

const FriendsAndFoes = [...friends, ...foes]; // = [].concat(friends).concat(foes); join 2 arrays
console.log(FriendsAndFoes);


//Spread operators on string
const splitStrings = [..."abcdefg"]; 
console.log(splitStrings);
// -> ["a", "b", "c", "d", "e", "f", "g"]


//Default parameters
const multiply = (a, b = 1) => {
  return a * b;
};
console.log(multiply(2));// 2



//Short properties in object
const name = "Peter";
const age = 20;
const student = { name, age };
console.log(student);

//able to assign computed property keey name during the object definition
let count = 1;
const inventory = {
  [count++] : "Apples",
  [count++] : "Oranges"
}
console.log(inventory);
// -> { 1: "Apples", 2: "Oranges" }