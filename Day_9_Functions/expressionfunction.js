//function expression
//declaring a function and assigning it to a variable
/*
1.usecase: when we want to pass a function as an argument to another function
2.when we want to return a function from another function
3.when we want to create a function inside a block scope
4.used in event handlers or callbacks
5.show pop up messages
6.adding items to whitelists or blacklists

*/


let add = function (a, b) {
    return a + b;
};


//function anonymous
//syntax
//function(a,b){return a+b;}

function() {
    console.log("anonymous function");
}
//error: function statement requires a name

(function () {
    console.log("anonymous function");
})();

//function expression
let sub = function (a, b) {
    return a - b;
};

