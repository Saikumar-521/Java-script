/* 
what is data types?
data type defined the kind of data store in varable

let x=100;  (primitive data type is immutable when re-sign in primitive datatype is possible but it takes new memory addres)
 x=200;
let y="100";

Types:
primitive data types: ARE THE NUMBER,STRING,BOOLEAN,NULL,UNDEFINED,SYMBOL
(stores in single value---->Immutable)
1) Number
What:represent both integer and floating points
why: used for mathematical calculation,condition
where: age,rating,price etc
2)String
what:represents sequences of charaters and enclosed with("",'',)
why:used for text data,message
where:name,mesage..ETC
3)boolean
what:represent true or false value
why:used for condition
where:login status,is admin etc
4)undefined
what:represent value is not assigned
why:used for variable decalration
where:variable declaration
5)null
what:it represnt intentiallt absence of value
why:used for datase,api, etc
where:databse,api etc,

null is a special value that represents the intentional absence of any object value. 
It is often used to indicate that a variable should not point to any object or that an object property is intentionally left empty.

diference between null and undefined
undefined: A variable that has been declared but not assigned a value is undefined. It indicates that the variable exists but has no value.
null: null is an assignment value that represents the intentional absence of any object value. It is explicitly assigned to a variable to indicate that it should not point to any object.
| **Aspect**        | **`undefined`**                                                           | **`null`**                                                                                        |
| ----------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Meaning**       | A variable has been **declared** but **not assigned** a value.            | A variable is **explicitly assigned** as having **no value**.                                     |
| **Type**          | `undefined` (primitive type)                                              | `object` (this is actually a historical JavaScript bug, but it’s kept for backward compatibility) |
| **Default Value** | Default value for **uninitialized variables** and **missing parameters**. | You **set** `null` intentionally when you want to represent "no value".                           |
| **Usage**         | Indicates that a variable or property has not been assigned a value yet.  | Indicates the intentional absence of any object value.                                            |

6)symbol:unique value generate 
what:represent unique and immutable primitive value
why:used for object property
where:object property

non-primitive data types:
1.Array
what:repesents collection of values with hetrogeious data types
why:used for storing multiple values
where:list of items.shopping cart etc
accessbility:through indexes(0,1,3,4)and size of the array starts from 1
2.object
what:collection of key value pair
why:used for stoting multiple values.
where:user data
accessibilty:through keys
3.array of object


*/
let age = 25;
console.log(age);
console.log(typeof age);

let a = 2.0;
let b = 3.3;
let c = a + b;
console.log(c);

let x = 0.2;
let y = 0.3;
let z = x + y;
console.log(z);
console.log(typeof z);

let name;
console.log(name);
console.log(typeof name);

let age1 = null;
console.log(age1);
console.log(typeof age1);

let s = Symbol(10);
let d = Symbol(20);
console.log(s == d);
console.log(typeof s);

//array are access through indexs

let array = ["sai", "kumar", "Yadavs", "Wipro", "Led"];
console.log(array[0]);

//object are accessing through key

let obj = {
    name: "sai kumar",
    age: 22,
    sex: "male",
    city: "Hyderabad",
    country: "India",
}
console.log(obj);
console.log(obj.name);
console.log(obj.sex);
console.log(typeof obj);


const id = Symbol("id");

const user = {
    name: "Sai",
    age: 22,
    [id]: 101
};

console.log(user["age"]); // 22 ✅
console.log(user.name);     // Sai
console.log(user[id]);      // 101 ✅
console.log(user.id);       // undefined ❌ (because the key is a symbol)

