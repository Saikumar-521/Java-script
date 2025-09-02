
let add = (a, b) => a + b;
console.log(add(10, 20));

let evenOdd = (n) => n % 2 === 0 ? "Even Number" : "Odd Number";
console.log(evenOdd(11));
console.log(evenOdd(20));

function reverse(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}
console.log(reverse("sai kumar"));

function maximum(a, b, c) {
    if (a >= b && a >= c)
        return a;
    else if (b >= a && b >= c)
        return b;
    else
        return c;
}
console.log(maximum(2, 6, 4));

function palindrome(str) {
    let rev = str;
    rev = rev.split("");
    rev = rev.reverse();
    rev = rev.join("");
    if (str === rev) {
        return "palindrome";
    } else {
        return "not a palindrome";
    }
}
console.log(palindrome("madam"));
console.log(palindrome("sai"));

let expression = (str) => {
    let rev = str, c = 0;
    rev = rev.split("");
    for (let i = 0; i < rev.length; i++) {
        if (rev[i] == "a" || rev[i] == "e" || rev[i] == "i" || rev[i] == "o" || rev[i] == "u")
            c++;
    }
    return c;
}
console.log(expression("sai kumar"));
console.log(expression("aeiou"));

let factorial = (n) => {
    if (n == 0 || n == 1)
        return 1;
    else
        return n * factorial(n - 1);
}
console.log(factorial(4));

let fibonacci = function (n) {
    let a = 0, b = 1, c;
    console.log(a);
    console.log(b);
    for (let i = 2; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
}
fibonacci(10);

let countDown = (n) => {
    for (let i = n; i >= 0; i--) {
        setTimeout(() => {
            console.log(i);
        }, 1000 * (n - i));
    }
}
countDown(10);

function calculator(a, b) {
    let add = (a, b) => a + b;
    let sub = (a, b) => a - b;
    let mul = (a, b) => a * b;
    let div = (a, b) => a / b;
    return `Addition: ${add(a, b)}, Subtraction: ${sub(a, b)}, Multiplication: ${mul(a, b)}, Division: ${div(a, b)}`;
}
console.log(calculator(10, 5));