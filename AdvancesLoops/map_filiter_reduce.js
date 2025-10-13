/*
map():
map() is an array method.
It creates a new array by applying a callback function to each element.
It does not change the original array.

syntax:
let newArray = array.map(function(element, index, array) {
    // return something (this becomes part of newArray)
});
element → current value
index → current index (optional)
array → the full array (optional)


| Feature        | `forEach()`                                | `map()`                        |
| -------------- | ------------------------------------------ | ------------------------------ |
| Return value   | `undefined` (no new array)                 | New array (transformed values) |
| Use case       | Perform side-effects (logging, DOM update) | Create new modified array      |
| Break/Continue | ❌ Not supported                            | ❌ Not supported               

| Feature       | `filter()`                | `map()`                        | `forEach()`            |
| ------------- | ------------------------- | ------------------------------ | ---------------------- |
| Returns       | New array (only matching) | New array (transformed values) | `undefined` (no array) |
| Use case      | Select specific elements  | Transform all elements         | Perform side effects   |
| Output length | ≤ original array          | = original array               | N/A                    |




2.filiter();
filter() is an array method.
It creates a new array with all elements that pass a condition.
It does not change the original array.
it return the true values.

let newArray = array.filter(function(element, index, array) {
    // return true (keep element) or false (remove element)
});

element → current value
index → current index (optional)
array → the full array (optional)

3.reduce():
reduce() is an array method.
It reduces the entire array into a single value (number, string, object, etc).
You provide a callback function that runs on each element and carries forward an accumulator.

syntax:
array.reduce(function(accumulator, currentValue, index, array) {
    // return updated accumulator
}, initialValue);

accumulator → result carried forward

currentValue → current element
index → current index (optional)
array → full array (optional)
initialValue → (optional) starting value of accumulator


*/
//map()
let num = [10, 20.30, 40, 50, 60]
let newArray = num.map(function (value, index) {
    console.log(index, ':', value);
});
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]

//map with array of objects:
let users = [
    { name: "Sai", age: 22 },
    { name: "Kumar", age: 25 },
    { name: "Anu", age: 20 }
];

let names = users.map(user => user.name);
console.log(names); // ["Sai", "Kumar", "Anu"]

let cap = ['sai', 'charan', 'kumar', 'prabhu', 'dev']
let newarr = cap.map(caps => caps.toUpperCase());
console.log(newarr);


//filiter method:
let numbers1 = [1, 2, 3, 4, 5, 6];

let evens = numbers1.filter(num => num % 2 === 0);

console.log(evens); // [2, 4, 6]

let people = [
    { name: "Sai", age: 17 },
    { name: "Kumar", age: 22 },
    { name: "Anu", age: 19 }
];

let adults = people.filter(person => person.age >= 18);

console.log(adults);
// [ { name: "Kumar", age: 22 }, { name: "Anu", age: 19 } ]

//reduce()
let num1 = [1, 2, 3, 4, 5];

let sum = num1.reduce((acc, num) => acc + num, 0);

console.log(sum); // 15





