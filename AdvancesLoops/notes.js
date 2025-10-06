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