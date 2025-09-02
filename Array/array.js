/*
Array is the collection of hetrogenius as well as homogenous elements.
an array can hold many values under asingle variable name,and you can access the values by reffering to an index number.
iteration of the array can be done using loops
*/

//array methods
//unshift-------->add element at start position of array->the new array length
//shift-------->remove element at start position of array
//push----->add element at end position of array
//pop->remove element at end position of array

let array = [1, "sai", 21, "kumar"]
array.unshift(0); //adds zero at strating of array
console.log(array);
array.shift(); //remove zero at strating of array
console.log(array);

array.push("end"); //adds at end of the array
console.log(array);
array.pop();
console.log(array); //removes the element at end of the array

//reverse method: reverse of an existing array--->reverse()
//sorting of an existing array---->sort()
//converting an array into a string---->toString()
//the slice( method slices out a piece of an array into a new array)------>it returns new array--------->slice(index_no, up-to-index-index number-1)
//the splice()--->method can be used to add or remove items into existing array
//here second parameter means adds or removes the element from the array
//array.splice(2,0,10,,30)---->splice(index_no,0--->add the elements,add_elemetns here)
//array.splice(2,2)--------->splice(index,remove_two_items_this indexnumber)
//array.splice(2,1,11,22)------->splice(index,1--->means removes elements,remaining elements will be added)
array.reverse();
console.log(array);

array.sort();
console.log(array);

let a = array.slice(2, 4);
console.log(a);
console.log(array);

let b = array.splice(2, 1); //this means remove kumar at index 2 in array and remove only one element
console.log(b);
console.log(array);
let c = array.splice(2, 0, "kumar", 521, 400);
console.log(c);
console.log(array);
console.log(array.values());