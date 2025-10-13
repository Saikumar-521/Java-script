/**
for in---------->
1.the for in loop in js is used to iterate over the enumerable properties(keys) of an object
2.it is not suitable for arrays
3.best for objects
4.it returns the keys (property name of objects),one at a time ,on each iteration
4.sytax:
for (let key in object) {
  // code to execute for each key
}

for...of → returns the values of an iterable (like an array, string, Map, Set, etc.).
for...in → returns the keys (indexes in case of arrays, property names in objects).


2.for of():
1.the for of loop is used for the array,
2.it returns the values not indexes, in each iteration
3.best for arrays



foreach():
1.It’s an array method.
2.It runs a function once for each element in the array.
3.It’s mostly used when you want to loop through an array without returning anything.
 */

//example of for in using object
let student = {
    name: 'sai kumar',
    age: 22,
    sex: 'male',
    ph: 8897034521
};
for (let student_keys in student) {
    console.log(student_keys, "------>", student[student_keys]);
}

//array also work with for in but some disadvantages are there
let array = [10, 20, 30, 40]
for (let index in array) {
    console.log(index, ':', array[index]);
}
delete array[2]
for (let i in array) {
    console.log(i, ':', array[i]);
}

//for of
let arr = [100, 220, 330, 445, 500]
for (let index of arr) {
    if (index % 2 == 0) {
        console.log(index);
    }
}

//for of using the object
let obj = {
    name: 'sai',
    age: 22,
    email: 'sai@gmail'
}

// for (let keys of obj) {
//     console.log(keys.name);
//     console.log(keys.age);
// }     TypeError: obj is not iterable


//correct way to iterate is
for (let key of Object.keys(obj)) {
    console.log(key);
}
for (let value of Object.values(obj)) {
    console.log(value);
}
//for both keys, and values use entries

for (let [k, v] of Object.entries(obj)) {
    console.log(k, ':', v);
}

//foreach
let arr1 = ['sai', 12, 13, 'kumar', 21]
arr1.forEach(function (value, index) {
    if (typeof value === "string")
        console.log(value, 'is a string data type');
    else if (typeof value === "number")
        console.log(value, 'is a number data type');
});

let numbers = [10, 20, 30];
let fruits = ["apple", "mango", "cherry"];

console.log(numbers.every(item => typeof item === "number"));
// true

console.log(fruits.every(item => typeof item === "string"));
// true
