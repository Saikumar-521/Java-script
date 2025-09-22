/*
A Regular Expression (RegEx) is a sequence of characters that defines a search pattern.
It is mainly used for string matching, searching, extracting, or replacing text.
In JavaScript, RegEx can be created in two ways:

1. Using literal notation
let pattern = /hello/;
2. Using RegExp constructor
let pattern2 = new RegExp("hello");

1.^--->start with
2.$--->ends with
3.(.)--->dot
4.*--------> 0 or more times,it will check previous and pattern must follow
5.+---------> 1 or more times,it will check previous and pattern must follow
6.?--------> 0 or 1 time
7.\->escape character
8.{}========>>>Quantifier (exact, range, minimum)
9.[]---->charater set
10.[^]------>negated set
11.|--->OR
12.()---------->grouping
*/
let caret = /^a/;
console.log(caret.test("a"));//true
console.log(caret.test("asaS"));//true
console.log(caret.test("xa"));//false

//$
let regex = /world$/;
console.log(regex.test("Hello world")); // true (ends with world)
console.log(regex.test("world Hello")); // false (not at end)
console.log(regex.test("World"));//false
console.log(regex.test("world"));//true

//dot
let dot = /h.t/;
console.log(dot.test("hat"));   // true  (h + a + t)
console.log(dot.test("hit"));   // true  (h + i + t)
console.log(dot.test("ht"));    // false (missing middle char)
console.log(dot.test('hout'));//false

//asterisk
let asterisk = /go*gle/;

console.log(asterisk.test("google"));
console.log(asterisk.test("goggllgle"));
console.log(asterisk.test('ggle'));
console.log(asterisk.test('gooogle'));

console.log("ggle".match(asterisk));        // ["ggle"] → 0 "o"
console.log("gogle".match(asterisk));       // ["gogle"] → 1 "o"
console.log("gooogle".match(asterisk));     // ["gooogle"] → many "o"

//+
console.log(/go+gle/.test("ggle"));       // false (needs ≥1 "o")
console.log(/go+gle/.test("gogle"));      // true
console.log(/go+gle/.test("gooogle"));    // true

//?
console.log(/colou?r/.test("color"));   // true (no "u")
console.log(/colou?r/.test("colour"));  // true (with "u")
console.log(/colou?r/.test("colouur")); // false (too many "u")

//{}
console.log(/a{3}/.test("aaa"));      // true (exactly 3 a’s)
console.log(/a{2,4}/.test("aaaa"));   // true (2–4 a’s)
console.log(/a{2,}/.test("aaaaaa"));  // true (2 or more a’s)
console.log(/a{3}/.test("aa"));       // false

//[]
console.log(/[a-z]/.test("s"));//true
console.log(/[cb]at/.test("cat")); // true
console.log(/[cb]at/.test("bat")); // true
console.log(/[cb]at/.test("hat")); // false
console.log(/[A-Z]/.test("%"));//false

//[^]-------->negated set
console.log(/[^0-9]/.test("7"));   // false (digit not allowed)
console.log(/[^0-9]/.test("A"));   // true (non-digit)

// |
console.log(/cat|dog/.test("I love cat")); // true
console.log(/cat|dog/.test("I love dog")); // true
console.log(/cat|dog/.test("I love cow")); // false

//()
console.log(/(ab)+/.test("ab"));     // true
console.log(/(ab)+/.test("abab"));   // true
console.log(/(ab)+/.test("a"));      // false

// \d-->digit
console.log(/\d/.test("123"));  // true
console.log(/\d/.test("abc"));  // false

//\D--->not a digit
console.log(/\D/.test("123"));  // false
console.log(/\D/.test("abc"));  // true

// \w → Word character (a-z, A-Z, 0-9, _)
console.log(/\w/.test("hello123")); // true
console.log(/\w/.test("!!!"));      // false

// \W->non-word charater
console.log(/\W/.test("hello"));   // false
console.log(/\W/.test("hello!"));  // true

// \s----whitespace
console.log(/\s/.test("hello world")); // true (space present)
console.log(/\s/.test("helloworld"));  // false

// \S------non-whitespace

console.log(/\S/.test("   "));  // false (only spaces)
console.log(/\S/.test("abc"));  // true





