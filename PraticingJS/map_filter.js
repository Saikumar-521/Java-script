/**
 map():
 The map() method is used to transform each element of an array into
  something else and returns a new array of the same length.

  It does not change the original array.

  syntax:
  array.map(callback(element, index, array), thisArg)
  callback → function applied to each element

element → current element
index → index of element (optional)
array → original array (optional)
thisArg → optional value for this


 */

let number = [1, 2, 3, 4, 5]

let squares = number.map(n => n * n)
console.log(squares);

//by using call back function
function squares1(number) {
    let s = number * number
    return s;
}


let double = number.map(squares1)
console.log(double);


function asyncSquare(number, cb) {
    setTimeout(() => {
        cb(number * number);
    }, 1000);
}

let numbers = [1, 2, 3];

numbers.forEach(num => {
    asyncSquare(num, result => {
        console.log(result);
    });
});

/*
The filter() method in JavaScript is used to create a new array containing 
only the elements that pass a certain condition (the test given in a callback function).

It does not change the original array—instead, it returns a new one.

array.filter(callback(element, index, array), thisArg)

callback → function that tests each element.
element → current element being processed
index → index of the element (optional)
array → the whole array (optional)
thisArg → value to use as this inside callback (optional)
*/